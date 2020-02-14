<form action="#" method="post">
    <div class="pmv-form-container">
        <div class="pmv-form-content-1 row align-items-center">
            <div class="col-4">
                <label class="pmv-label" for="baby">0 - 2 ans</label>
            </div>
            <div class='pmv-form-container-readonly col-4'>
                <span class="pmv-moins" id='pmv-moins-baby'>-</span>
                <input type="text" readonly="readonly" id="baby2" class="pmv-form-readonly" min="0" max="20" value="0">
                <span class="pmv-plus" id='pmv-plus-baby'>+</span>
            </div>
            <div class="text-uppercase prix-tarif">Gratuit</div>
        </div>

        <div class="pmv-form-content-2 row align-items-center">
            <div class="col-4">
                <label class="pmv-label" for="kid">2 - 8 ans</label>
            </div>
            <div class='pmv-form-container-readonly col-4'>
                <span class="pmv-moins" id='pmv-moins-kid'>-</span>
                <input type="text" readonly="readonly" id="kid2" class="pmv-form-readonly" min="0" max="20" value="0">
                <span class="pmv-plus" id='pmv-plus-kid'>+</span>
            </div>
            <div class="prix-tarif">12,50 €</div>
        </div>

        <div class="pmv-form-content-3 row align-items-center">
            <div class="col-4">
                <label class="pmv-label" for="teen">Plus de 8 ans</label>
            </div>
            <div class='pmv-form-container-readonly col-4'>
                <span class="pmv-moins" id='pmv-moins-teen'>-</span>
                <input type="text" readonly="readonly" id="teen2" class="pmv-form-readonly" min="0" max="20" value="0">
                <span class="pmv-plus" id='pmv-plus-teen'>+</span>
            </div>
            <div class="prix-tarif">13,50 €</div>
        </div>

        <div class="pmv-form-content-4 row align-items-center">
            <div class="col-4">
                <label class="pmv-label" for="adult">Adulte (+18 ans)</label>
            </div>
            <div class='pmv-form-container-readonly col-4'>
                <span class="pmv-moins" id='pmv-moins-adult'>-</span>
                <input type="text" readonly="readonly" id="adult2" class="pmv-form-readonly" min="0" max="20" value="0">
                <span class="pmv-plus" id='pmv-plus-adult'>+</span>
            </div>
            <div class="prix-tarif">15 €</div>
        </div>
        <!-- <button name="pmv-btn-submit-cost" id="pmv-btn-submit-cost">Combien ?</button> -->
        <div class="result-form-tarif">Voici le montant estimé : <span id="rft"></span> €</div>
    </form>
</div>
<div id="pmv-result"></div>