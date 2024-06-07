const reactions =[
    {
        "equation": "Mg + O<sub>2</sub> → MgO",
        "importance": "Magnesium oxide is produced.",
        "uses": "Used in refractory materials, fertilizers, and as an antacid.",
        "hiddenInfo": "The reaction is highly exothermic, releasing a bright white light.",
        "image": "images/mg_o2_mgo.jpg"
    },
    {
        "equation": "Pb(NO<sub>3</sub>)<sub>2</sub> + KI → PbI<sub>2</sub> + KNO<sub>3</sub>",
        "importance": "Formation of lead iodide.",
        "uses": "Lead iodide is used in photodetectors and solar cells.",
        "hiddenInfo": "Lead iodide forms a bright yellow precipitate.",
        "image": "images/pb_no3_ki_pbi2_kno3.jpg"
    },
    {
        "equation": "Zn + HCl → ZnCl<sub>2</sub> + H<sub>2</sub>",
        "importance": "Production of zinc chloride and hydrogen gas.",
        "uses": "Zinc chloride is used in batteries, and hydrogen gas is used as a fuel.",
        "hiddenInfo": "The reaction is a classic example of a metal reacting with an acid.",
        "image": "images/zn_hcl_zncl2_h2.jpg"
    },
    {
        "equation": "Zn + H<sub>2</sub>SO<sub>4</sub> → ZnSO<sub>4</sub> + H<sub>2</sub>",
        "importance": "Production of zinc sulfate and hydrogen gas.",
        "uses": "Zinc sulfate is used in medicine, as a dietary supplement, and in agriculture.",
        "hiddenInfo": "Similar to the HCl reaction, it demonstrates the reactivity of zinc with acids.",
        "image": "images/zn_h2so4_znso4_h2.jpg"
    },
    {
        "equation": "CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> + Δ",
        "importance": "Formation of calcium hydroxide.",
        "uses": "Used in construction (slaked lime), in water treatment, and as a pH modifier.",
        "hiddenInfo": "The reaction is exothermic, releasing heat (Δ).",
        "image": "images/cao_h2o_caoh2.jpg"
    },
    {
        "equation": "Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub> + H<sub>2</sub>O",
        "importance": "Formation of calcium carbonate.",
        "uses": "Used in construction, as a dietary calcium supplement, and in the production of lime.",
        "hiddenInfo": "This reaction is an important part of the carbon cycle.",
        "image": "images/caoh2_co2_caco3_h2o.jpg"
    },
    {
        "equation": "C + O<sub>2</sub> → CO<sub>2</sub>",
        "importance": "Combustion of carbon to form carbon dioxide.",
        "uses": "Essential in respiration, photosynthesis, and as a greenhouse gas.",
        "hiddenInfo": "This reaction releases energy, making it crucial for energy production.",
        "image": "images/c_o2_co2.jpg"
    },
    {
        "equation": "6CO<sub>2</sub> + 12H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>",
        "importance": "Photosynthesis.",
        "uses": "Fundamental process for life on Earth, producing glucose and oxygen.",
        "hiddenInfo": "This reaction occurs in chloroplasts of plant cells.",
        "image": "images/6co2_12h2o_c6h12o6_6o2.jpg"
    },
    {
        "equation": "2FeSO<sub>4</sub> &#x2206; Fe<sub>2</sub>O<sub>3</sub> + SO<sub>2</sub> + SO<sub>3</sub>",
        "importance": "Decomposition of ferrous sulfate.",
        "uses": "Iron oxide is used in pigments and as a polishing agent.",
        "hiddenInfo": "The reaction is endothermic, requiring heat (&#x2206;).",
        "image": "images/2feso4_fe2o3_so2_so3.jpg"
    },
    {
        "equation": "CaCO<sub>3</sub> &#x2206; CaO + CO<sub>2</sub>",
        "importance": "Thermal decomposition of calcium carbonate.",
        "uses": "Produces lime (CaO) used in construction and CO<sub>2</sub>.",
        "hiddenInfo": "This reaction is important in the manufacture of cement and lime.",
        "image": "images/caco3_cao_co2.jpg"
    },
    {
        "equation": "2H<sub>2</sub>O &#x2192; 2H<sub>2</sub> + O<sub>2</sub>",
        "importance": "Electrolysis of water.",
        "uses": "Produces hydrogen and oxygen gases.",
        "hiddenInfo": "This reaction requires electrical energy.",
        "image": "images/2h2o_2h2_o2.jpg"
    },
    {
        "equation": "2AgCl &#x2192; 2Ag + Cl<sub>2</sub>",
        "importance": "Decomposition of silver chloride.",
        "uses": "Used in photography.",
        "hiddenInfo": "The reaction is photo-sensitive, occurring in sunlight.",
        "image": "images/2agcl_2ag_cl2.jpg"
    },
    {
        "equation": "2AgBr &#x2192; 2Ag + Br<sub>2</sub>",
        "importance": "Decomposition of silver bromide.",
        "uses": "Used in photographic films.",
        "hiddenInfo": "This reaction is also light-sensitive.",
        "image": "images/2agbr_2ag_br2.jpg"
    },
    {
        "equation": "Ba(OH)<sub>2</sub> + 2NH<sub>4</sub> → BaCl<sub>2</sub> + 2NH<sub>3</sub> + H<sub>2</sub>O",
        "importance": "Reaction of barium hydroxide with ammonium chloride.",
        "uses": "Demonstrates endothermic reactions.",
        "hiddenInfo": "The reaction absorbs heat from the surroundings.",
        "image": "images/baoh2_2nh4_bacl2_2nh3_h2o.jpg"
    },
    {
        "equation": "Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu",
        "importance": "Displacement reaction.",
        "uses": "Demonstrates the reactivity series of metals.",
        "hiddenInfo": "Iron displaces copper from copper sulfate solution.",
        "image": "images/fe_cuso4_feso4_cu.jpg"
    },
    {
        "equation": "Pb + CuCl<sub>2</sub> → PbCl<sub>2</sub> + Cu",
        "importance": "Displacement reaction.",
        "uses": "Shows reactivity series.",
        "hiddenInfo": "Lead displaces copper from copper chloride solution.",
        "image": "images/pb_cucl2_pbcl2_cu.jpg"
    },
    {
        "equation": "Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → BaSO<sub>4</sub> + 2NaCl",
        "importance": "Double displacement reaction.",
        "uses": "Produces barium sulfate, used in medical imaging.",
        "hiddenInfo": "Barium sulfate forms a white precipitate.",
        "image": "images/na2so4_bacl2_baso4_nacl.jpg"
    },
    {
        "equation": "ZnO + C → Zn + CO",
        "importance": "Reduction of zinc oxide.",
        "uses": "Produces zinc metal.",
        "hiddenInfo": "Carbon acts as a reducing agent, converting ZnO to Zn.",
        "image": "images/zno_c_zn_co.jpg"
    }
]


const cardsContainer = document.getElementById('cards-container');

reactions.forEach(reaction => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <p class="card-text"><strong>Equation:</strong> ${reaction.equation}</p>
                <p class="card-text"><strong>Importance:</strong> ${reaction.importance}</p>
                <p class="card-text"><strong>Uses:</strong> ${reaction.uses}</p>
                <p class="card-text"><strong>Hidden Information:</strong> ${reaction.hiddenInfo}</p>
            </div>
        </div>
    `;

    cardsContainer.appendChild(card);
});
