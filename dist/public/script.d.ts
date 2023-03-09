declare const formProd: HTMLElement;
declare const formMsj: HTMLElement;
declare function renderProduct(data: any): void;
declare function renderMessages(data: any): void;
declare function renderProductAdd(data: any): void;
declare function renderMessageAdd(data: any): void;
declare function agregarProd(e: any): Promise<void>;
declare function addMessage(e: any): Promise<boolean>;
