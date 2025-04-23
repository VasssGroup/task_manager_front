import type { MapActionType, DataCortegeType } from '@/app/types';
import { getDeepParam } from '@/helpers';

export const mapAction: MapActionType = {
    handleSendFormAction: async (formData: FormData, dataCortege?: DataCortegeType) => {
        try {
            if (!dataCortege?.url) {
                throw new Error('Отсутствует обязательный параметр "url"');
            }
            const { url, method = 'POST', ...otherParameters } = dataCortege;
            const params: Record<string, FormDataEntryValue> = {};
            for (const [key, value] of formData.entries()) {
                params[key] = value;
            }
            for (const [key, value] of Object.entries(otherParameters)) {
                params[key] = `${value}`;
            }
            console.log('onFormAction  [onAction] Run', { url, method, params });

            const response = await fetch(url.toString(), {
                method: method.toString(),
                body: JSON.stringify(params)
            });
            const result = await response.json();
            console.log('onFormAction  [onAction] Ready', { result, response });
        } catch (error) {

        }
    },
    handleReciveAndPut: async (e: Event, dataCortege?: DataCortegeType) => {
        try {
            console.log('♦► handleReciveAndPut ♦♦►', { dataCortege });
            if (!dataCortege?.url) {
                throw new Error('Отсутствует обязательный параметр "url"');
            }
            const { url, method = 'GET', putList, ...otherParameters } = dataCortege;

            const params: Record<string, FormDataEntryValue> = {};
            for (const [key, value] of Object.entries(otherParameters)) {
                params[key] = `${value}`;
            }
            console.log('♦► handleReciveAndPut [params] ♦♦►', { params });

            const response = await fetch(url.toString(), {
                method: method.toString(),
                body: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : undefined
            });
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

                    // Далее найти по селектору элемент
                    const element = document.querySelector(to);
                    element[property] = typeof propData === 'object' ? JSON.stringify(propData) : propData;
                });
            }

        } catch {

        }
    },
    handleSendData: async (e: Event, dataCortege?: DataCortegeType) => {
        try {
            
        } catch {

        }
    }
}