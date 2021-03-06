export class PurchaseProxy {

  //#region Constructor

  constructor(entity: Partial<PurchaseProxy>) {
    Object.assign(entity, this);
  }

  //#endregion

  //#region Public Properties

  /**
   * Código do item
   */
  public cod: string;

  /**
   * Data da compra
   */
  public data: string;

  /**
   * Quantidade de itens
   */
  public qtd: number;

  /**
   * Valor total da soma dos itens
   */
  public total: number;

  /**
   * Valor do ICMS pago
   */
  public ICMS: number;

  /**
   * Valor do ST pago
   */
  public ST: number;

  //#endregion

}
