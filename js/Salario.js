class Salario {
    /**
     * Construtor da classe
     * @param {number} pSalarioBruto
     * @param {number} pSalarioLiquido
     * @param {number} 
     */

     constructor (pSalarioBruto, pSalarioLiquido){
         this._SalarioBruto = undefined;
         this._SalarioLiquido = undefined;

         this._validarParametro(pSalarioBruto);
         this._validarParametro(pSalarioLiquido);

         this._SalarioBruto = pSalarioBruto;
         this._SalarioLiquido = pSalarioLiquido;

         this._efetuarCalculos();

         object.freeze(this);
     }

     _efetuarCalculos(){
         this._DesInss = this._SalarioBruto 
     }
}