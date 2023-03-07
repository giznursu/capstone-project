const products = [
    {
        category : "Bronzer",
        brand : "DIOR",
        name: "FOREVER NATURAL BRONZE",
        color: "01",
        img : "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw7f239628/assets/Y0216000/Y0216000_C021600001_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
    },
    {
        category : "Bronzer",
        brand : "DIOR",
        name: "FOREVER NATURAL BRONZE",
        color: "02",
        img : "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwe81ce197/assets/Y0216000/Y0216000_C021600002_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
    },
    {
        category : "Bronzer",
        brand : "DIOR",
        name: "FOREVER NATURAL BRONZE",
        color: "03",
        img :"https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw54654978/assets/Y0216000/Y0216000_C021600003_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
    },
    {
        category : "Bronzer",
        brand : "DIOR",
        name: "FOREVER NATURAL BRONZE",
        color: "04",
        img: "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw22292940/assets/Y0216000/Y0216000_C021600004_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
    },
    {
        category : "Bronzer",
        brand : "DIOR",
        name: "FOREVER NATURAL BRONZE",
        color: "05",
        img: "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw767a57d6/assets/Y0216000/Y0216000_C021600005_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
    },
    {
        category : "Bronzer",
        brand : "FENTY BEAUTY",
        name: "Sun Stalk'r Instant Warmth Bronzer",
        color: "Inda Sun",
        img : "https://media.ulta.com/i/ulta/2592464?w=720&fmt=webp"
    },
    {
        category : "Bronzer",
        brand : "FENTY BEAUTY",
        name: "Sun Stalk'r Instant Warmth Bronzer",
        color: "Shady Biz",
        img:"https://media.ulta.com/i/ulta/2592465?w=720&fmt=webp"
    },
    {
        category : "Bronzer",
        brand : "FENTY BEAUTY",
        name: "Sun Stalk'r Instant Warmth Bronzer",
        color: "Caramel Cutie",
        img:"https://media.ulta.com/i/ulta/2592469?w=720&fmt=webp"
    },
    {
        category : "Concelear",
        brand : "DIOR",
        name: "BACKSTAGE FLASH PERFECTOR CONCEALAR",
        color: "0CR Cool Rosy"
    },
    {
        category : "Concelear",
        brand : "DIOR",
        name: "BACKSTAGE FLASH PERFECTOR CONCEALAR",
        color: "0W Warm"
    },
    {
        category : "Concelear",
        brand : "DIOR",
        name: "BACKSTAGE FLASH PERFECTOR CONCEALAR",
        color: "4W Warm"
    },
    {
        category : "Concelear",
        brand : "DIOR",
        name: "BACKSTAGE FLASH PERFECTOR CONCEALAR",
        color: "4C Cool"
    },
    {
        category : "Concelear",
        brand : "DIOR",
        name: "BACKSTAGE FLASH PERFECTOR CONCEALAR",
        color: "3N Neutral"
    },
    {
        category : "Concelear",
        brand : "TARTE",
        name: "Shape Tape",
        color: "60H Mahogany Honey"
    },
    {
        category : "Concelear",
        brand : "TARTE",
        name: "Shape Tape",
        color: "53N Deep"
    },
    {
        category : "Concelear",
        brand : "TARTE",
        name: "Shape Tape",
        color: "44H Tan"
    },
    {
        category : "Concelear",
        brand : "TARTE",
        name: "Shape Tape",
        color: "36S Medium-Tan Sand"
    },
    {
        category : "Concelear",
        brand : "TARTE",
        name: "Shape Tape",
        color: "22N Light Neutral"
    },
    {
        category : "Lipgloss",
        brand : "HERMES",
        name: "Shape TapeHermesistible, Infused Care Oil",
        color: "01-Beige Sapotille"
    },
    {
        category : "Lipgloss",
        brand : "HERMES",
        name: "Shape TapeHermesistible, Infused Care Oil",
        color: "02-Corail Bigarade"
    },
    {
        category : "Lipgloss",
        brand : "HERMES",
        name: "Shape TapeHermesistible, Infused Care Oil",
        color: "03-Rose Pitaya"
    },
    {
        category : "Lipgloss",
        brand : "HERMES",
        name: "Shape TapeHermesistible, Infused Care Oil",
        color: "04-Rouge Amarelle"
    },
    {
        category : "Lipgloss",
        brand : "HERMES",
        name: "Shape TapeHermesistible, Infused Care Oil",
        color: "06-Pourpre Camarine"
    },
    {
        category : "Lipgloss",
        brand : "YSL",
        name: "ROUGE VOLUPTÉ SHINE LIPSTICK BALM",
        color: "09 Nude Sheer"
    },
    {
        category : "Lipgloss",
        brand : "YSL",
        name: "ROUGE VOLUPTÉ SHINE LIPSTICK BALM",
        color: "12 Corail Dolman"
    },
    {
        category : "Lipgloss",
        brand : "YSL",
        name: "ROUGE VOLUPTÉ SHINE LIPSTICK BALM",
        color: "15 Corail Spontini"
    },
    {
        category : "Lipgloss",
        brand : "YSL",
        name: "ROUGE VOLUPTÉ SHINE LIPSTICK BALM",
        color: "16 Orange Majorelle"
    },
    {
        category : "Lipgloss",
        brand : "YSL",
        name: "ROUGE VOLUPTÉ SHINE LIPSTICK BALM",
        color: "44 Nude Lavalliere"
    },
    {
        category : "Mascara",
        brand : "YSL",
        name: "LASH CLASH EXTREME VOLUME MASCARA",
        color: "1 Black"
    },
    {
        category : "Mascara",
        brand : "YSL",
        name: "LASH CLASH EXTREME VOLUME MASCARA",
        color: "2 Brown"
    },
    {
        category : "Mascara",
        brand : "DIOR",
        name: "DIORSHOW",
        color: "090 Black"
    },
    {
        category : "Mascara",
        brand : "DIOR",
        name: "DIORSHOW",
        color: "288 Blue"
    },
    {
        category : "Mascara",
        brand : "DIOR",
        name: "DIORSHOW",
        color: "798 Brown"
    },
    {
        category : "Mascara",
        brand : "ESTEELAUDER",
        name: "Double Wear Zero-Smudge Lengthening Mascara",
        color: "Black"
    },
    {
        category : "Mascara",
        brand : "LANCOME",
        name: "LASH IDÔLE MASCARA",
        color: "Glossy Black"
    },
    
    
]

module.exports = {products}
