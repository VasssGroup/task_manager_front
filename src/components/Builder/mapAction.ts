import type { MapActionType, DataCortegeType, MapType } from '@/app/types';
import { getDeepParam } from '@/helpers';

export const mapAction: MapActionType = {
    handleSendFormAction: async (formData: FormData, dataCortege?: DataCortegeType) => {
        try {
            if (!dataCortege?.url) {
                throw new Error('Отсутствует обязательный параметр "url"');
            }
            const { url, method = 'POST', ...otherParameters } = dataCortege;
            const params: MapType<FormDataEntryValue> = {};
            for (const [key, value] of formData.entries()) {
                params[key] = value;
            }
            for (const [key, value] of Object.entries(otherParameters)) {
                params[key] = `${value}`;
            }
            console.log('onFormAction  [onAction] Run', { url, method, params });
            const body = method === 'POST' || method === 'PUT' ? JSON.stringify(params) : undefined;

            const response = await fetch(url, { method, body });
            const result = await response.json();
            console.log('onFormAction  [onAction] Ready', { result, response });
        } catch (error) {
            console.error('♠ handleSendFormAction [ERROR] ♠:', { error });
        }
    },
    handleReciveAndPut: async (e: Event, dataCortege?: DataCortegeType) => {
        try {
            console.log('♦► handleReciveAndPut ♦♦►', { dataCortege });
            if (!dataCortege?.url) {
                throw new Error('Отсутствует обязательный параметр "url"');
            }
            const { url, method = 'GET', putList, ...otherParameters } = dataCortege;

            const params: MapType = {};
            for (const [key, value] of Object.entries(otherParameters)) {
                params[key] = value;
            }
            console.log('♦► handleReciveAndPut [params] ♦♦►', { params });

            const body = method === 'POST' || method === 'PUT' ? JSON.stringify(params) : undefined;

            const response = await fetch(url, { method, body });
            console.log('♦► handleReciveAndPut [response] ♦♦►', { response });
            const data = await response.json();
            console.log('♦► handleReciveAndPut [data] ♦♦►:', { data });
            if (Array.isArray(putList)) {
                putList.forEach(({ from, to, property }) => {
                    if (!from || !to) {
                        return;
                    }
                    const arFrom = from.split('.');
                    if (arFrom[0] === 'data') {
                        arFrom.shift();
                    }

                    // Получить свойство
                    const propData = getDeepParam(data, arFrom);

                    // Найти по селектору элемент
                    const element = document.querySelector(to);
                    if (!element) return;
                    element[property] = (typeof propData === 'object') ? JSON.stringify(propData) : `${propData}`;
                });
            }
        } catch (error) {
            console.error('♠ handleReciveAndPut [ERROR] ♠:', { error });
        }
    },
    handleSendData: async (e: Event, dataCortege?: DataCortegeType) => {
        try {
            if (!dataCortege?.url) {
                throw new Error('Отсутствует обязательный параметр "url"');
            }
            const { url, method = 'POST', ...otherParameters } = dataCortege;
            const params: MapType = {};
            for (const [key, value] of Object.entries(otherParameters)) {
                params[key] = value;
            }
            console.log('♦► handleSendData  [params] ♦♦►', { url, method, params });

            const body = method === 'POST' || method === 'PUT' ? JSON.stringify(params) : undefined;

            const response = await fetch(url, { method, body });
            const result = await response.json();
            console.log('♦► handleSendData  [response] ♦♦►', { result, response });
        } catch (error) {
            console.error('♠ handleSendData [ERROR] ♠:', { error });
        }
    }
}