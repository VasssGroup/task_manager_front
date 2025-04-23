import type { StructuresMapType } from '@/app/types';

export const mapStructures: StructuresMapType = {
    HEADER: {
        tag: 'header',
        className: 'grow-0 flex flex-row flex-nowrap bg-gray-500 m-0 p-0',
        children: [
            {
                tag:'©Menu'                    
            },
            {
                tag: 'h1',
                className: 'grow-1 text-white text-8xl text-center font-bold -mt-3 p-0',
                children: 'Title page'
            },
            {
                tag: 'div',
                className: 'grow-0 w-1/4',
                children: [
                    
                ]
            }
        ]
    },
    FOOTER: {
        tag: 'footer',
        className: 'grow-0 h-60 p-5 m-0 bg-gray-800 text-gray-300',
        children: 'BottomArea'
    },
    HOME_PAGE: {
        tag: 'section',
        className: 'grow-1',
        children: [
            {
                tag: 'h1',
                children: 'Home Page (WorkArea)'
            },
            {
                tag: 'div',
                className: 'grid grid-cols-2 gap-4',
                children: [
                    {
                        tag: 'div', 
                        className: 'bg-blue-100',                           
                        children: [
                            {
                                tag: 'div',
                                className: 'flex flex-col',
                                children: [
                                    {
                                        tag: 'h3',
                                        className: 'text-center text-blue-950 font-bold text-2xl m-3',
                                        children: 'Получить routePack'
                                    },
                                    {
                                        tag: 'div',
                                        className: 'm-3',
                                        children: [
                                            {
                                                tag: 'button',
                                                actions: [
                                                    {
                                                        eventHandler: 'onClick',
                                                        executable: [
                                                            {
                                                                actionName: 'handleReciveAndPut',
                                                                params: {
                                                                    url: '/api/routes/r?name=A1',
                                                                    method: 'GET',
                                                                    putList: [
                                                                        {
                                                                            from: 'data.name',
                                                                            to: '#read_name',
                                                                            property: 'defaultValue'
                                                                        },
                                                                        {
                                                                            from: 'data.json',
                                                                            to: '#read_json',
                                                                            property: 'defaultValue'
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]                                                        
                                                    }
                                                ],
                                                children: 'Получить'
                                            }
                                        ]
                                    },                                        
                                    {
                                        tag: 'input',              
                                        className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                        id: 'read_name',
                                        name: 'name',
                                        type: 'text',
                                        placeholder: 'Имя routePack'
                                    },
                                    {
                                        tag: 'textarea',              
                                        className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                        id: 'read_json',
                                        name: 'json',
                                        placeholder: 'Структура в формате JSON'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        tag: 'div', 
                        className: 'bg-green-100',                           
                        children: [
                            {
                                tag: 'form',
                                className: 'flex flex-col',
                                actions: [
                                    {
                                    eventHandler: 'action',
                                    executable: [
                                        {
                                            actionName: 'handleSendFormAction',
                                            params: {
                                                url: '/api/routes/c',
                                                method: 'POST'
                                            }
                                        }
                                    ]
                                    
                                    }
                                ],
                                children:[
                                    {
                                        tag: 'h3',
                                        className: 'text-center text-green-950 font-bold text-2xl m-3',
                                        children: 'Создать routePack'
                                    },
                                    {
                                        tag: 'input',              
                                        className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                        name: 'name',
                                        type: 'text',
                                        placeholder: 'Имя routePack',
                                        required: true
                                    },
                                    {
                                        tag: 'textarea',              
                                        className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                        name: 'json',
                                        placeholder: 'Структура в формате JSON',
                                        defaultValue: '{}',
                                        required: true
                                    },
                                    {
                                        tag: 'div',
                                        className: 'm-3',
                                        children: [
                                            {
                                                tag: 'input',
                                                type: 'submit',
                                                value: 'Создать'
                                            }
                                        ]
                                    }                                        
                                ],
                            }
                        ]
                    },
                    {
                        tag: 'div',
                        className: 'bg-yellow-100',
                        children: [
                            {
                                tag: 'form',
                                className: 'flex flex-col',
                                children:[
                                    {
                                        tag: 'h3',
                                        className: 'text-center text-yellow-950 font-bold text-2xl m-3',
                                        children: 'Обновить routePack'
                                    },
                                    {
                                        tag: 'input',              
                                        className: 'border-solid border-2 outline-0 border-yellow-700 m-3',
                                        name: 'name',
                                        type: 'text',
                                        placeholder: 'Имя routePack',
                                        required: true
                                    },
                                    {
                                        tag: 'textarea',              
                                        className: 'border-solid border-2 outline-0 border-yellow-700 m-3',
                                        name: 'json',
                                        placeholder: 'Структура в формате JSON',
                                        defaultValue: '{}',
                                        required: true
                                    },
                                    {
                                        tag: 'div',
                                        className: 'm-3',
                                        children: [
                                            {
                                                tag: 'input',
                                                type: 'submit',
                                                value: 'Обновить'
                                            }
                                        ]
                                    }                                        
                                ],
                            }
                        ]
                    },
                    {
                        tag: 'div',
                        children: 'Delete'
                    }
                ]                    
            },
            {
                tag: 'div',
                children: [
                    {
                        tag: 'form',
                        actions: [
                            {
                            eventHandler: 'action',
                            executable: [
                                {
                                    actionName: 'handleSendFormAction',
                                    params: {
                                        url: '/api/routes/c',
                                        method: 'POST'
                                    }
                                }
                            ]
                            
                            }
                        ],
                        children: [
                            {
                                tag: 'input',              
                                className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                name: 'text',
                                type: 'text',
                                defaultValue: 'туту текст',
                            },
                            {
                                tag: 'input',
                                className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                name: 'email',
                                type: 'email',
                                required: true,
                                value: ''
                            },
                            {
                                tag: 'input',
                                className: 'border-solid border-2 outline-0 border-green-700 m-3',
                                name: 'password',
                                type: 'password',
                                required: true,
                                value: ''
                            },
                            {
                                tag: 'input',
                                type: 'submit',
                                value: 'Отправить'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    ABOUT_PAGE: {
        tag: 'section',
        className: 'grow-1',
        children: [
            {
                tag: 'h1',
                children: 'About page'
            }
        ]
    },
    '404': {
        tag: 'section',
        className: 'grow-1',
        children:[
            {
                tag: 'h1',
                className: 'text-6xl',
                children: ' Error 404 (page not found)'
            }
        ]
    }
}