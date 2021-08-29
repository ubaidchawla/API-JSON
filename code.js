let options;
let arr_field_errors = {};
let api_url = 'https://api-velocity.newton.ca/api/forms/v1/deals/deal'
let arr_bad_input_fields = [];
if (bundle.authData.is_sandbox_api_key == 'No') {
} else {
    api_url = 'https://sit-api-velocity.newton.ca/api/forms/v1/deals/deal';
}
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}
function directionStringToNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'north')
    {
        inputValue=1;
    }
    else if (inputValue.toString().toLowerCase() == 'northeast')
    {
        inputValue=2;
    }
    else if (inputValue.toString().toLowerCase() == 'east')
    {
        inputValue=3;
    }
    else if (inputValue.toString().toLowerCase() == 'southeast')
    {
        inputValue=4;
    }
    else if (inputValue.toString().toLowerCase() == 'south')
    {
        inputValue=5;
    }
    else if (inputValue.toString().toLowerCase() == 'southWest')
    {
        inputValue=6;
    }
    else if (inputValue.toString().toLowerCase() == 'west')
    {
        inputValue=7;
    }
    else if (inputValue.toString().toLowerCase() == 'northwest')
    {
        inputValue=8;
    }
    return inputValue;
}
function typeStringtoNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'abbey')
    {
        inputValue=10;
    } else if (inputValue.toString().toLowerCase() == 'acres')
    {
        inputValue=20;
    } else if (inputValue.toString().toLowerCase() == 'allée')
    {
        inputValue=30;
    } else if (inputValue.toString().toLowerCase() == 'alley')
    {
        inputValue=40;
    } else if (inputValue.toString().toLowerCase() == 'autoroute')
    {
        inputValue=50;
    } else if (inputValue.toString().toLowerCase() == 'avenue')
    {
        inputValue=60;
    } else if (inputValue.toString().toLowerCase() == 'bay')
    {
        inputValue=70;
    } else if (inputValue.toString().toLowerCase() == 'beach')
    {
        inputValue=80;
    } else if (inputValue.toString().toLowerCase() == 'bend')
    {
        inputValue=90;
    } else if (inputValue.toString().toLowerCase() == 'boulevard')
    {
        inputValue=100;
    } else if (inputValue.toString().toLowerCase() == 'bypass')
    {
        inputValue=110;
    } else if (inputValue.toString().toLowerCase() == 'byway')
    {
        inputValue=120;
    } else if (inputValue.toString().toLowerCase() == 'campus')
    {
        inputValue=130;
    } else if (inputValue.toString().toLowerCase() == 'cape')
    {
        inputValue=140;
    } else if (inputValue.toString().toLowerCase() == 'carré')
    {
        inputValue=150;
    } else if (inputValue.toString().toLowerCase() == 'carrefour')
    {
        inputValue=160;
    } else if (inputValue.toString().toLowerCase() == 'centre')
    {
        inputValue=170;
    } else if (inputValue.toString().toLowerCase() == 'cercle')
    {
        inputValue=180;
    } else if (inputValue.toString().toLowerCase() == 'chase')
    {
        inputValue=190;
    } else if (inputValue.toString().toLowerCase() == 'chemin')
    {
        inputValue=200;
    } else if (inputValue.toString().toLowerCase() == 'circle')
    {
        inputValue=210;
    } else if (inputValue.toString().toLowerCase() == 'circuit')
    {
        inputValue=220;
    } else if (inputValue.toString().toLowerCase() == 'close')
    {
        inputValue=230;
    } else if (inputValue.toString().toLowerCase() == 'common')
    {
        inputValue=240;
    } else if (inputValue.toString().toLowerCase() == 'concession')
    {
        inputValue=250;
    } else if (inputValue.toString().toLowerCase() == 'corners')
    {
        inputValue=260;
    } else if (inputValue.toString().toLowerCase() == 'côte')
    {
        inputValue=270;
    } else if (inputValue.toString().toLowerCase() == 'cour')
    {
        inputValue=280;
    } else if (inputValue.toString().toLowerCase() == 'cours')
    {
        inputValue=290;
    } else if (inputValue.toString().toLowerCase() == 'court')
    {
        inputValue=300;
    } else if (inputValue.toString().toLowerCase() == 'cove')
    {
        inputValue=310;
    } else if (inputValue.toString().toLowerCase() == 'crescent')
    {
        inputValue=320;
    } else if (inputValue.toString().toLowerCase() == 'croissant')
    {
        inputValue=330;
    } else if (inputValue.toString().toLowerCase() == 'crossing')
    {
        inputValue=340;
    }
    if (inputValue.toString().toLowerCase() == 'culdesac')
    {
        inputValue=350;
    }
    if (inputValue.toString().toLowerCase() == 'dale')
    {
        inputValue=360;
    }
    if (inputValue.toString().toLowerCase() == 'dell')
    {
        inputValue=370;
    }
    if (inputValue.toString().toLowerCase() == 'diversion')
    {
        inputValue=380;
    }
    if (inputValue.toString().toLowerCase() == 'downs')
    {
        inputValue=390;
    }
    if (inputValue.toString().toLowerCase() == 'drive')
    {
        inputValue=400;
    }
    if (inputValue.toString().toLowerCase()  == 'echangeur')
    {
        inputValue=410;
    }
    if (inputValue.toString().toLowerCase() == 'end')
    {
        inputValue=420;
    }
    if (inputValue.toString().toLowerCase() == 'esplanade')
    {
        inputValue=430;
    }
    if (inputValue.toString().toLowerCase() == 'estates')
    {
        inputValue=440;
    }
    if (inputValue.toString().toLowerCase() == 'expressway')
    {
        inputValue=450;
    }
    if (inputValue.toString().toLowerCase() == 'extension')
    {
        inputValue=460;
    }
    if (inputValue.toString().toLowerCase() == 'farm')
    {
        inputValue=470;
    }
    if (inputValue.toString().toLowerCase() == 'field')
    {
        inputValue=480;
    }
    if (inputValue.toString().toLowerCase() == 'forest')
    {
        inputValue=490;
    }
    if (inputValue.toString().toLowerCase() == 'freeway')
    {
        inputValue=500;
    }
    if (inputValue.toString().toLowerCase() == 'front')
    {
        inputValue=510;
    }
    if (inputValue.toString().toLowerCase() == 'gardens')
    {
        inputValue=520;
    }
    if (inputValue.toString().toLowerCase() == 'gate')
    {
        inputValue=530;
    }
    if (inputValue.toString().toLowerCase() == 'glade')
    {
        inputValue=540;
    }
    if (inputValue.toString().toLowerCase() == 'glen')
    {
        inputValue=550;
    }
    if (inputValue.toString().toLowerCase() == 'green')
    {
        inputValue=560;
    }
    if (inputValue.toString().toLowerCase() == 'grounds')
    {
        inputValue=570;
    }
    if (inputValue.toString().toLowerCase() == 'grove')
    {
        inputValue=580;
    }
    if (inputValue.toString().toLowerCase() == 'harbour')
    {
        inputValue=590;
    }
    if (inputValue.toString().toLowerCase() == 'heath')
    {
        inputValue=600;
    }
    if (inputValue.toString().toLowerCase() == 'heights')
    {
        inputValue=610;
    }
    if (inputValue.toString().toLowerCase() == 'highlands')
    {
        inputValue=620;
    }
    if (inputValue.toString().toLowerCase() == 'highway')
    {
        inputValue=630;
    }
    if (inputValue.toString().toLowerCase() == 'hill')
    {
        inputValue=640;
    }
    if (inputValue.toString().toLowerCase() == 'hollow')
    {
        inputValue=650;
    }
    if (inputValue.toString().toLowerCase() == 'ile')
    {
        inputValue=660;
    }
    if (inputValue.toString().toLowerCase() == 'impasse')
    {
        inputValue=670;
    }
    if (inputValue.toString().toLowerCase() == 'inlet')
    {
        inputValue=680;
    } 
    if (inputValue.toString().toLowerCase() == 'island')
    {
        inputValue=690;
    } 
    if (inputValue.toString().toLowerCase() == 'key')
    {
        inputValue=700;
    } 
    if (inputValue.toString().toLowerCase() == 'knoll')
    {
        inputValue=710;
    } 
    if (inputValue.toString().toLowerCase() == 'landing')
    {
        inputValue=720;
    }
    if (inputValue.toString().toLowerCase() == 'lane')
    {
        inputValue=730;
    }
    if (inputValue.toString().toLowerCase() == 'limits')
    {
        inputValue=740;
    } 
    if (inputValue.toString().toLowerCase() == 'line')
    {
        inputValue=750;
    } 
    if (inputValue.toString().toLowerCase() == 'link')
    {
        inputValue=760;
    } 
    if (inputValue.toString().toLowerCase() == 'lookout')
    {
        inputValue=770;
    } 
    if (inputValue.toString().toLowerCase() == 'loop')
    {
        inputValue=780;
    }
    if (inputValue.toString().toLowerCase() == 'mall')
    {
        inputValue=790;
    } else if (inputValue.toString().toLowerCase() == 'manor')
    {
        inputValue=800;
    } else if (inputValue.toString().toLowerCase() == 'maze') {
        inputValue=810;
    } else if (inputValue.toString().toLowerCase() == 'meadow')
    {
        inputValue=820;
    } else if (inputValue.toString().toLowerCase() == 'meadows')
    {
        inputValue=830;
    } else if (inputValue.toString().toLowerCase() == 'mews')
    {
        inputValue=840;
    } else if (inputValue.toString().toLowerCase() == 'montée')
    {
        inputValue=850;
    } else if (inputValue.toString().toLowerCase() == 'moor')
    {
        inputValue=860;
    } else if (inputValue.toString().toLowerCase() == 'mount')
    {
        inputValue=870;
    } else if (inputValue.toString().toLowerCase() == 'mountain')
    {
        inputValue=880;
    } else if (inputValue.toString().toLowerCase() == 'orchard')
    {
        inputValue=890;
    } else if (inputValue.toString().toLowerCase() == 'parade')
    {
        inputValue=900;
    } else if (inputValue.toString().toLowerCase() == 'parc')
    {
        inputValue=910;
    }
    if (inputValue.toString().toLowerCase() == 'park')
    {
        inputValue=920;
    } 
    if (inputValue.toString().toLowerCase() == 'parkway')
    {
        inputValue=930;
    } 
    if (inputValue.toString().toLowerCase() == 'passage')
    {
        inputValue=940;
    } 
    if (inputValue.toString().toLowerCase() == 'path')
    {
        inputValue=950;
    } 
    if (inputValue.toString().toLowerCase() == 'pathway')
    {
        inputValue=960;
    }
    if (inputValue.toString().toLowerCase() == 'pines')
    {
        inputValue=970;
    }
    if (inputValue.toString().toLowerCase() == 'place')
    {
        inputValue=980;
    } 
    if (inputValue.toString().toLowerCase() == 'plateau')
    {
        inputValue=990;
    } 
    if (inputValue.toString().toLowerCase() == 'plaza')
    {
        inputValue=1000;
    } 
    if (inputValue.toString().toLowerCase() == 'point')
    {
        inputValue=1010;
    } 
    if (inputValue.toString().toLowerCase() == 'pointe')
    {
        inputValue=1020;
    }
    if (inputValue.toString().toLowerCase() == 'port')
    {
        inputValue=1030;
    }
    if (inputValue.toString().toLowerCase() == 'private')
    {
        inputValue=1040;
    } 
    if (inputValue.toString().toLowerCase() == 'promenade')
    {
        inputValue=1050;
    } else if (inputValue.toString().toLowerCase() == 'quay')
    {
        inputValue=1060;
    } else if (inputValue.toString().toLowerCase() == 'ramp')
    {
        inputValue=1070;
    } else if (inputValue.toString().toLowerCase() == 'rang')
    {
        inputValue=1080;
    } else if (inputValue.toString().toLowerCase() == 'range')
    {
        inputValue=1090;
    } else if (inputValue.toString().toLowerCase() == 'ridge')
    {
        inputValue=1100;
    } else if (inputValue.toString().toLowerCase() == 'rise')
    {
        inputValue=1110;
    } else if (inputValue.toString().toLowerCase() == 'road')
    {
        inputValue=1120;
    } else if (inputValue.toString().toLowerCase() == 'rondpoint')
    {
        inputValue=1130;
    } else if (inputValue.toString().toLowerCase() == 'route')
    {
        inputValue=1140;
    } else if (inputValue.toString().toLowerCase() == 'row')
    {
        inputValue=1150;
    } else if (inputValue.toString().toLowerCase() == 'rue')
    {
        inputValue=1160;
    } else if (inputValue.toString().toLowerCase() == 'ruelle')
    {
        inputValue=1170;
    } else if (inputValue.toString().toLowerCase() == 'run')
    {
        inputValue=1180;
    } else if (inputValue.toString().toLowerCase() == 'sentier')
    {
        inputValue=1190;
    } else if (inputValue.toString().toLowerCase() == 'square')
    {
        inputValue=1200;
    } else if (inputValue.toString().toLowerCase() == 'street')
    {
        inputValue=1210;
    } else if (inputValue.toString().toLowerCase() == 'subdivision')
    {
        inputValue=1220;
    } else if (inputValue.toString().toLowerCase() == 'terrace')
    {
        inputValue=1230;
    } else if (inputValue.toString().toLowerCase() == 'terrasse')
    {
        inputValue=1240;
    } else if (inputValue.toString().toLowerCase() == 'thicket')
    {
        inputValue=1250;
    } else if (inputValue.toString().toLowerCase() == 'towers')
    {
        inputValue=1260;
    } else if (inputValue.toString().toLowerCase() == 'townline')
    {
        inputValue=1270;
    } else if (inputValue.toString().toLowerCase() == 'trail')
    {
        inputValue=1280;
    } else if (inputValue.toString().toLowerCase() == 'turnabout')
    {
        inputValue=1290;
    } else if (inputValue.toString().toLowerCase() == 'vale')
    {
        inputValue=1300;
    } else if (inputValue.toString().toLowerCase() == 'via')
    {
        inputValue=1310;
    } else if (inputValue.toString().toLowerCase() == 'view')
    {
        inputValue=1320;
    } else if (inputValue.toString().toLowerCase() == 'village')
    {
        inputValue=1330;
    } else if (inputValue.toString().toLowerCase() == 'villas')
    {
        inputValue=1340;
    } else if (inputValue.toString().toLowerCase() == 'vista')
    {
        inputValue=1350;
    } else if (inputValue.toString().toLowerCase() == 'voie')
    {
        inputValue=1360;
    } else if (inputValue.toString().toLowerCase() == 'walk')
    {
        inputValue=1370;
    } else if (inputValue.toString().toLowerCase() == 'way')
    {
        inputValue=1380;
    } else if (inputValue.toString().toLowerCase() == 'wharf')
    {
        inputValue=1390;
    } else if (inputValue.toString().toLowerCase() == 'wood')
    {
        inputValue=1400;
    } else if (inputValue.toString().toLowerCase() == 'wynd')
    {
        inputValue=1410;
    }
    return inputValue;
}
function intendedUseStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'owneroccupied')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'owneroccupiedandrental')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'rental')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'secondhome')
    {
        inputValue=4;
    }
    return inputValue;
}

function mortgagePurposeStringToNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'purchase')
    {
        inputValue=1;
    }
    else if (inputValue.toString().toLowerCase() == 'refinance')
    {
        inputValue=2;
    }
    else if (inputValue.toString().toLowerCase() == 'renew')
    {
        inputValue=3;
    }
    return inputValue;
}


function salutationStringToNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'mr')
    {
        inputValue=1;
    }
    else if (inputValue.toString().toLowerCase() == 'mrs')
    {
        inputValue=2;
    }
    else if (inputValue.toString().toLowerCase() == 'ms')
    {
        inputValue=3;
    }
    else if (inputValue.toString().toLowerCase() == 'dr')
    {
        inputValue=4;
    }
    else if (inputValue.toString().toLowerCase() == 'rev')
    {
        inputValue=5;
    }
    else if (inputValue.toString().toLowerCase() == 'miss')
    {
        inputValue=6;
    }
    else if (inputValue.toString().toLowerCase() == 'judge')
    {
        inputValue=7;
    }
    return inputValue;
}
function suffixStringToNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'sr')
    {
        inputValue=1;
    }
    else if (inputValue.toString().toLowerCase() == 'jr')
    {
        inputValue=2;
    }
}

function maritalStatusStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'commonlaw')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'divorced')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'married')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'separated')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'single')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'widowed')
    {
        inputValue=6;
    }
    return inputValue;
}

function contactPreferenceStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'homephone')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'cellphone')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'email')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'workphone')
    {
        inputValue=4;
    }
    return inputValue;
}

function residentTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'landedimmigrant')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'workvisa')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'canadiancitizen')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=4;
    }
    return inputValue;
}


function relationshipStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'spouse')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'commonlaw')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'relatedfamilymember')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'parent')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'sibling')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').replace(/\s+/g, '').toLowerCase() == 'child')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'grandchild')
    {
        inputValue=7;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'grandparent')
    {
        inputValue=8;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=9;
    }
    return inputValue;
}



function languageStringToNum(inputValue)
{
    if (inputValue.toString().toLowerCase() == 'english')
    {
        inputValue=10;
    }
    else if (inputValue.toString().toLowerCase() == 'french')
    {
        inputValue=20;
    }
    return inputValue;
}

function countryStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'canada')
    {
        inputValue=10;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'unitedstates')
    {
        inputValue=20;
    }
    return inputValue;
}

function dwellingStatusStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'currentlyown')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'livewithparents')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'previouslyowned')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'rent')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=5;
    }

    return inputValue;
}

function jobTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'clerical')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'labourtradesperson')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'management')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'professional')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'retired')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'selfemployed')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'unemployed')
    {
        inputValue=7;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'homemaker')
    {
        inputValue=8;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=9;
    }
    return inputValue;
}

function employmentTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'fulltime')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'parttime')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'seasonal')
    {
        inputValue=3;
    }
    return inputValue;
}


function industrySectorStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'bankingorfinance')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'construction')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'education')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'farmingornaturalresources')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'government')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'health')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'hightech')
    {
        inputValue=7;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'leisureorentertainment')
    {
        inputValue=8;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'manufacturing')
    {
        inputValue=9;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'retailsales')
    {
        inputValue=10;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'services')
    {
        inputValue=11;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'transportation')
    {
        inputValue=12;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'varies')
    {
        inputValue=13;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=14;
    }
    return inputValue;
}


function incomeTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'commissions')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'hourly')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'hourlypluscommissions')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'salary')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'selfemployed')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=6;
    }
    return inputValue;
}


function incomePeriodStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'annual')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'biweekly')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'monthly')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'quarterly')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'semiannual')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'semimonthly')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'weekly')
    {
        inputValue=7;
    }
    return inputValue;
}


function otherIncomeTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'alimony')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'childsupport')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'interestincome')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'pension')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=5;
    }
    return inputValue;
    
}

function otherIncomePeriodStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'annual')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'biweekly')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'monthly')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'quarterly')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'semiannual')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'semimonthly')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'weekly')
    {
        inputValue=7;
    }
    return inputValue;
}

function assetTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'depositonpurchase')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'gift')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'householdgoods')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'lifeinsurance')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'mutualfundorstockorbonds')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'rrsp')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'savings')
    {
        inputValue=7;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'vehicle')
    {
        inputValue=8;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=9;
    }
    return inputValue;
}


function occupanyStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'owneroccupied')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'owneroccupiedandrental')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'rental')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'secondhome')
    {
        inputValue=4;
    }
    return inputValue;
}

function propertyFutureStatusStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'selling')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'notselling')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'renting')
    {
        inputValue=3;
    }
    return inputValue;
}

function mortgagePaymentFrequencyStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'biweekly')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'biweeklyacc')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'monthly')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'semimonthly')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'weekly')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'weeklyacc')
    {
        inputValue=6;
    }
    return inputValue;
}

function mortgagePayoffTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'fromproceeds')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'priortoadvance')
    {
        inputValue=2;
    }
    return inputValue;
}


function mortgageRateTypesStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'adjustable')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'buydown')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'cappedvariable')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'fixed')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'variable')
    {
        inputValue=5;
    }
    return inputValue;
}

function mortgageTermTypesStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'closed')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'convertible')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'open')
    {
        inputValue=3;
    }
    return inputValue;
}

function insurerStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'canadaguaranty')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'cmhc')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'genworth')
    {
        inputValue=3;
    }
    return inputValue;
}

function referralTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'builder')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'realtor')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'client')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'other')
    {
        inputValue=4;
    }
    return inputValue;
}
function dealStatusStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'new')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'submitted')
    {
        inputValue=2;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'approved')
    {
        inputValue=3;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'accepted')
    {
        inputValue=4;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'waitingtoclose')
    {
        inputValue=5;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'funded')
    {
        inputValue=6;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'complete')
    {
        inputValue=7;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'cancelled')
    {
        inputValue=9;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'declined')
    {
        inputValue=10;
    }
    return inputValue;
}

function dateTypeStringToNum(inputValue)
{
    if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'closingdate')
    {
        inputValue=1;
    }
    else if (inputValue.toString().replace(/\s+/g, '').toLowerCase() == 'entrydate')
    {
        inputValue=2;
    }

    return inputValue;
}


//console.log('in here');
    options = {
        url: api_url + `?apiKey=${bundle.authData.apiKey}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/octet-stream',
            'X-API-KEY': bundle.authData.apiKey
        },
        params: {
            'apiKey': bundle.authData.apiKey
        },
        body: {
            "closingDate": bundle.inputData.closingDate,
            "purchasePrice": bundle.inputData.purchasePrice,
            "subjectProperty": {
                "unitNumber": bundle.inputData.unitNumber,
                "streetNumber": bundle.inputData.streetNumber,
                "streetName": bundle.inputData.streetName,
                "streetType": bundle.inputData.streetType,
                "streetDirection": bundle.inputData.streetDirection,
                "city": bundle.inputData.city,
                "province": bundle.inputData.province,
                // "postalCode": bundle.inputData.postalCode,
                "intendedUse": bundle.inputData.intendedUse
            },
            "mortgageRequest": {
                "purpose": bundle.inputData.purpose,
                "mortgages": [
                    {
                        "amount": bundle.inputData.amount
                    }
                ]
            },
            "borrowers": [
                {
                    "salutation": bundle.inputData.salutation,
                    "firstName": bundle.inputData.firstName,
                    "middleName": bundle.inputData.middleName,
                    "lastName": bundle.inputData.lastName,
                    "suffix": bundle.inputData.suffix,
                    "email": bundle.inputData.email,
                    "caslOptIn": bundle.inputData.caslOptIn,
                    "homePhone": bundle.inputData.homePhone,
                    "cellPhone": bundle.inputData.cellPhone,
                    "businessPhone": bundle.inputData.businessPhone,
                    "dateOfBirth": bundle.inputData.dateOfBirth,
                    "socialInsuranceNumber": bundle.inputData.socialInsuranceNumber,
                    "maritalStatus": bundle.inputData.maritalStatus,
                    "contactPreference": bundle.inputData.contactPreference,
                    "residentType": bundle.inputData.residentType,
                    "correspondenceLanguage": bundle.inputData.borrowerCorrespondenceLanguage,
                    "firstTimeBuyer": bundle.inputData.firstTimeBuyer,
                    "numOfDependents": bundle.inputData.numOfDependents,
                    // "relationshipToPrimary": bundle.inputData.relationshipToPrimary,
                    "addresses": [
                        {
                            "unitNumber": bundle.inputData.borrowerAddressUnitNumber,
                            "streetNumber": bundle.inputData.borrowerAddressStreetNumber,
                            "streetName": bundle.inputData.borrowerAddressStreetName,
                            "streetType": bundle.inputData.borrowerAddressStreetType,
                            "streetDirection": bundle.inputData.borrowerAddressStreetDirection,
                            "city": bundle.inputData.borrowerAddressCity,
                            "provinceOrState": bundle.inputData.borrowerAddressProvinceOrState,
                            "country": bundle.inputData.borrowerAddressCountry,
                            // "postalCode": bundle.inputData.borrowerAddressPostalCode,
                            "yearsAtAddress": bundle.inputData.yearsAtAddress,
                            "monthsAtAddress": bundle.inputData.monthsAtAddress,
                            "dwellingStatus": bundle.inputData.dwellingStatus,
                            "rentalPayment": bundle.inputData.borrowerAddressrentalPayment
                        }
                    ],
                    "employmentHistory": [
                        {
                            "isCurrent": bundle.inputData.isCurrent,
                            "companyName": bundle.inputData.borrowerEmploymentCompanyName,
                            "selfEmployment": {
                                "companyType": bundle.inputData.borrowerEmploymentCompanyType,
                                "operatingAs": bundle.inputData.borrowerEmploymentOperatingAs,
                                "grossRevenue": bundle.inputData.borrowerSelfEmploymentGrossRevenue
                            },
                            "jobTitle": bundle.inputData.borrowerEmploymentJobTitle,
                            "jobType": bundle.inputData.borrowerEmploymentJobType,
                            "yearsAt": bundle.inputData.borrowerEmploymentYearsAt,
                            "monthsAt": bundle.inputData.borrowerMonthsAtEmployment,
                            "employmentType": bundle.inputData.borrowerEmploymentType,
                            "industrySector": bundle.inputData.borrowerEmploymentIndustrySector,
                            "incomeType": bundle.inputData.borrowerEmploymentIncomeType,
                            "incomePeriod": bundle.inputData.borrowerEmploymentIncomePeriod,
                            "income": bundle.inputData.borrowerEmploymentIncome,
                            "yearsInIndustry": bundle.inputData.borrowerEmploymentYearsInIndustry,
                            "monthsInIndustry": bundle.inputData.borrowerEmploymentMonthsInIndustry,
                            "phoneNumber": bundle.inputData.borrowerEmploymentPhoneNumber,
                            "unitNumber": bundle.inputData.UnitEmploymentUnitNumber,
                            "streetNumber": bundle.inputData.borrowerEmploymentStreetNumber,
                            "streetName": bundle.inputData.borrowerEmploymentStreetName,
                            "streetType": bundle.inputData.borrowerEmploymentStreetType,
                            "streetDirection": bundle.inputData.borrowerEmploymentStreetDirection,
                            "city": bundle.inputData.borrowerEmploymentCity,
                            "provinceOrState": bundle.inputData.borrowerEmploymentProvinceOrState,
                            "country": bundle.inputData.borrowerEmploymentCountry,
                            // "postalCode": bundle.inputData.borrowerEmploymentPostalCode
                        }
                    ],
                    "otherIncomes": [
                        {
                            "type": bundle.inputData.borrowerOtherIncomeType,
                            "incomePeriod": bundle.inputData.borrowerOtherIncomePeriod,
                            "amount": bundle.inputData.borrowerOtherIncomeAmount,
                            "description": bundle.inputData.borrowerOtherIncomeDescription
                        }
                    ],
                    "assets": [
                        {
                            "type": bundle.inputData.borrowerAssetType,
                            "value": bundle.inputData.borrowerAssetValue,
                            "description": bundle.inputData.borrowerAssetDescription,
                            "downPaymentAmount": bundle.inputData.borrowerAssetDownPaymentAmount
                        }
                    ],
                    "properties": [
                        {
                            "occupancy": bundle.inputData.borrowerPropertyOccupancy,
                            "value": bundle.inputData.borrowerPropertyValue,
                            "originalPurchaseDate": bundle.inputData.borrowerPropertyOriginalPurchaseDate,
                            "originalPrice": bundle.inputData.borrowerPropertyOriginalPrice,
                            "annualTaxes": bundle.inputData.borrowerPropertyAnnualTaxes,
                            "condoFees": bundle.inputData.borrowerPropertyCondoFees,
                            "includesHeat": bundle.inputData.borrowerPropertyIncludesHeat,
                            "heatingFee": bundle.inputData.borrowerPropertyHeatingFee,
                            "propertyEquity": bundle.inputData.borrowerPropertyEquity,
                            "futureStatus": bundle.inputData.borrowerPropertyFutureStatus,
                            "rentalDetails": {
                                "income": bundle.inputData.borrowerPropertyRentalIncome,
                                "hydroExpense": bundle.inputData.borrowerPropertyRentalHydroExpense,
                                "managementExpense": bundle.inputData.borrowerPropertyRentalManagementExpense,
                                "insuranceExpense": bundle.inputData.borrowerPropertyInsuranceExpense,
                                "repairsExpense": bundle.inputData.borrowerPropertyRepairsExpense,
                                "interestExpense": bundle.inputData.borrowerPropertyInterestExpense,
                                "otherExpense": bundle.inputData.borrowerPropertyOtherExpense
                            },
                            "unitNumber": bundle.inputData.borrowerPropertyUnitNumber,
                            "streetNumber": bundle.inputData.borrowerPropertyStreetNumber,
                            "streetName": bundle.inputData.borrowerPropertyStreetName,
                            "streetType": bundle.inputData.borrowerPropertyStreetType,
                            "streetDirection": bundle.inputData.borrowerPropertyStreetDirection,
                            "city": bundle.inputData.borrowerPropertyCity,
                            "provinceOrState": bundle.inputData.borrowerPropertyProvinceOrState,
                            "country": bundle.inputData.borrowerPropertyCountry,
                            // "postalCode": bundle.inputData.borrowerPropertyPostalCode,
                            "mortgages": [
                                {
                                    "balance": bundle.inputData.propertyMortgageBalance,
                                    "maturityDate": bundle.inputData.propertyMortgageMaturityDate,
                                    "paymentFrequency": bundle.inputData.propertyMortgagePaymentFrequency,
                                    "payment": bundle.inputData.propertyMortgagePayment,
                                    "payoffType": bundle.inputData.propertyMortgagePayoffType,
                                    "lender": bundle.inputData.propertyMortgageLender,
                                    "rateType": bundle.inputData.propertyMortgageRateType,
                                    "interestRate": bundle.inputData.propertyMortgageInterestRate,
                                    "blendedAmortization": bundle.inputData.propertyMortgageBlendedAmortization,
                                    "termType": bundle.inputData.propertyMortgageTermType,
                                    "mortgageNumber": bundle.inputData.propertyMortgageNumber,
                                    "insured": bundle.inputData.propertyMortgageInsured,
                                    "insuranceAccount": bundle.inputData.propertyMortgageInsuranceAccount,
                                    "insurer": bundle.inputData.propertyMortgageInsurer,
                                    "originalPurchaseAmount": bundle.inputData.propertyOriginalPurchaseAmount
                                }
                            ]
                        }
                    ]
                }
            ],
            "notes": [
            {
            "text": bundle.inputData.noteText
            }
            ],
            "referral": {
            "firstName": bundle.inputData.referralFirstName,
            "lastName": bundle.inputData.referralLastName,
            "companyName": bundle.inputData.referralCompanyName,
            "email": bundle.inputData.referralEmail,
            "type": bundle.inputData.referralType,
            "otherTypeDescription": bundle.inputData.referralOtherTypeDescription
            }
        }
    }

let dateExp = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-](\d{2})\:(\d{2})/
if (bundle.inputData.hasOwnProperty('closingDate') && !dateExp.test(bundle.inputData.closingDate)) {
  delete options.body.closingDate;
  let obj_field_error = {};
  obj_field_error.field_name = "closingDate";
  obj_field_error.error_message = "Invalid value. Ignoring field. Needs to be in 2019-08-24T14:15:22Z format";
  
  arr_bad_input_fields.push(obj_field_error);  
}

function addressParse(full_address) {
  let commaSplit;
    for (i = 1; i < 10; i++) {
    
        //var full_address="333 las vegas blvd #333, las vegas, NV 89147"
        
        if (!(Array.isArray(full_address))){
          commaSplit = full_address.split(",");
        }
        else
        {
          commaSplit = full_address;
        }
        var streetNumber = '';
        var unitNumber = (commaSplit[0].split(" "))[0];
        var streetName = (commaSplit[0].split(" "))[1];
        var streetType = (commaSplit[0].split(" "))[2];
        if ((commaSplit[0].split(" "))[3]) {
          var streetNumber = (commaSplit[0].split(" "))[3];
        }
        else{
            streetNumber="1";
        }
        var city = commaSplit[1];
        var state = (commaSplit[2].split(" "))[1];
        var zipcode = (commaSplit[2].split(" "))[2];
        
        //reading and converting abbreviations
        if(streetType.indexOf('.') !== -1)
        {
            streetType = streetType.split(".")[0];
        }
        if (streetType.toString().toLowerCase() == 'ave')
        {
          streetType = "Avenue";
        }
        else if (streetType.toString().toLowerCase() == 'pkwy') {
          streetType = "Parkway";
        }
        else if (streetType.toString().toLowerCase() == 'blvd') {
          streetType = "Boulevard";
        }
        else if (streetType.toString().toLowerCase() == 'pl') {
          streetType = "Place";
        }
        else if (streetType.toString().toLowerCase() == 'plz') {
          streetType = "Plaza";
        }
        else if (streetType.toString().toLowerCase() == 'cir') {
          streetType = "Circle";
        }
        else if (streetType.toString().toLowerCase() == 'rdg') {
          streetType = "Ridge";
        }
        else if (streetType.toString().toLowerCase() == 'ct') {
          streetType = "Court";
        }
        else if (streetType.toString().toLowerCase() == 'rd') {
          streetType = "Road";
        }
        else if (streetType.toString().toLowerCase() == 'dr') {
          streetType = "Drive";
        }
        else if (streetType.toString().toLowerCase() == 'sq') {
          streetType = "Square ";
        }
        else if (streetType.toString().toLowerCase() == 'expy') {
          streetType = "Expressway ";
        }
        else if (streetType.toString().toLowerCase() == 'st') {
          streetType = "Street";
        }
        else if (streetType.toString().toLowerCase() == 'hts') {
          streetType = "Heights";
        }
        else if (streetType.toString().toLowerCase() == 'hwy') {
          streetType = "Highway";
        }
        else if (streetType.toString().toLowerCase() == 'ter') {
          streetType = "Terrace";
        }
        else if (streetType.toString().toLowerCase() == 'is') {
          streetType = "Island";
        }
        else if (streetType.toString().toLowerCase() == 'trl') {
          streetType = "Trail";
        }
        else if (streetType.toString().toLowerCase() == 'ln') {
          streetType = "Lane";
        }
        else if (streetType.toString().toLowerCase() == 'way') {
          streetType = "Way";
        }
        else if (streetType.toString().toLowerCase() == 'mtn') {
          streetType = "Mountain";
        }
        else{
            streetType = streetType;
        }
        var parsedAddress = {"unitNumber": unitNumber, "streetName": streetName, "streetType": streetType, "streetNumber":streetNumber, "city": city, "state": state, "zipcode": zipcode};
  
        return parsedAddress;
    }
  }
  if (bundle.inputData.hasOwnProperty('subjectProperty_full_street_address')) {
      var addressObject = addressParse(bundle.inputData.subjectProperty_full_street_address);
      options.body.subjectProperty.unitNumber = addressObject.unitNumber;
      options.body.subjectProperty.streetName = addressObject.streetName;
      options.body.subjectProperty.streetType = addressObject.streetType;
      options.body.subjectProperty.streetNumber = addressObject.streetNumber;
      options.body.subjectProperty.city = addressObject.city;
      //options.body.subjectProperty.state = addressObject.state;
      //options.body.subjectProperty.zipcode = addressObject.zipcode;
  }
  if (bundle.inputData.hasOwnProperty('borrower_full_street_address')) {
    var addressObject = addressParse(bundle.inputData.borrower_full_street_address);
    options.body.borrowers[0].addresses[0].unitNumber = addressObject.unitNumber;
    options.body.borrowers[0].addresses[0].streetName = addressObject.streetName;
    options.body.borrowers[0].addresses[0].streetType = addressObject.streetType;
    options.body.borrowers[0].addresses[0].streetNumber = addressObject.streetNumber;
    options.body.borrowers[0].addresses[0].city = addressObject.city;
    //options.body.borrowers[0].addresses[0].state = addressObject.state;
    //options.body.borrowers[0].addresses[0].zipcode = addressObject.zipcode;
}
if (bundle.inputData.hasOwnProperty('borrower_employmentHistory_street_address')) {
    var addressObject = addressParse(bundle.inputData.borrower_employmentHistory_street_address);
    options.body.borrowers[0].employmentHistory[0].unitNumber = addressObject.unitNumber;
    options.body.borrowers[0].employmentHistory[0].streetName = addressObject.streetName;
    options.body.borrowers[0].employmentHistory[0].streetType = addressObject.streetType;
    options.body.borrowers[0].employmentHistory[0].streetNumber = addressObject.streetNumber;
    options.body.borrowers[0].employmentHistory[0].city = addressObject.city;
    //options.body.borrowers[0].employmentHistory[0].state = addressObject.state;
    //options.body.borrowers[0].employmentHistory[0].zipcode = addressObject.zipcode;
    
}
if (bundle.inputData.hasOwnProperty('borrower_properties_street_address')) {
    var addressObject = addressParse(bundle.inputData.borrower_properties_street_address);
    options.body.borrowers[0].properties[0].unitNumber = addressObject.unitNumber;
    options.body.borrowers[0].properties[0].streetName = addressObject.streetName;
    options.body.borrowers[0].properties[0].streetType = addressObject.streetType;
    options.body.borrowers[0].properties[0].streetNumber = addressObject.streetNumber;
    options.body.borrowers[0].properties[0].city = addressObject.city;
    //options.body.borrowers[0].properties[0].zipcode = addressObject.zipcode;
    //options.body.borrowers[0].properties[0].state = addressObject.state;
}
  
// subject property validation
if (bundle.inputData.hasOwnProperty('streetNumber')) {

  if((bundle.inputData.streetNumber.length > 10))
  {
      options.body.subjectProperty.streetNumber = bundle.inputData.streetNumber.substr(0,10);
      let obj_field_error = {};
      obj_field_error.field_name = "subjectProperty.streetNumber";
      obj_field_error.error_message = "Length too long. reducing length to 10 characters";
      
      arr_bad_input_fields.push(obj_field_error);
  }
}

if (bundle.inputData.hasOwnProperty('streetDirection')) {
    if (isString(bundle.inputData.streetDirection))
    {
        bundle.inputData.streetDirection = directionStringToNum(bundle.inputData.streetDirection);
        options.body.borrowers[0].addresses[0].streetDirection = bundle.inputData.streetDirection;
    }
  if(!(bundle.inputData.streetDirection >= 1 && bundle.inputData.streetDirection <= 8))
  {
      delete options.body.subjectProperty.streetDirection;
      let obj_field_error = {};
      obj_field_error.field_name = "subjectProperty.streetDirection";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
      
      arr_bad_input_fields.push(obj_field_error);
  }
}


if (bundle.inputData.hasOwnProperty('streetType')) {
    if (isString(bundle.inputData.streetType))
    {
      bundle.inputData.streetType = typeStringtoNum(bundle.inputData.streetType)
      options.body.subjectProperty.streetType = bundle.inputData.streetType;
    }
    let temp_street_type = Math.floor(bundle.inputData.streetType/10);
    if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
      delete options.body.subjectProperty.streetType;
      let obj_field_error = {};
      obj_field_error.field_name = "SubjectProperty.streetType";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
      arr_bad_input_fields.push(obj_field_error);
    }
  }

if (bundle.inputData.hasOwnProperty('province')) {
  delete options.body.subjectProperty.province;
  let obj_field_error = {};
  obj_field_error.field_name = "subjectProperty.province";
  obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyIntendedUses values at: https://newton.ca/developers/velocity-api/#enumerations";
  
  arr_bad_input_fields.push(obj_field_error);
}

if (bundle.inputData.hasOwnProperty('intendedUse') && !(bundle.inputData.intendedUse >= 1 && bundle.inputData.intendedUse <= 4)) {
  delete options.body.subjectProperty.intendedUse;
  let obj_field_error = {};
  obj_field_error.field_name = "subjectProperty.intendedUse";
  obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyIntendedUses values at: https://newton.ca/developers/velocity-api/#enumerations";
  
  arr_bad_input_fields.push(obj_field_error);
}


// MortgageRequest validation
if (bundle.inputData.hasOwnProperty('purpose') && !(bundle.inputData.purpose == 10 || bundle.inputData.purpose == 20 || bundle.inputData.purpose == 30)) {
  // set default to 10
  options.body.mortgageRequest.purpose = 10;
  let obj_field_error = {};
  obj_field_error.field_name = "mortgageRequest.purpose";
  obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see MortgageRequestPurposes values at: https://newton.ca/developers/velocity-api/#enumerations";
  
  arr_bad_input_fields.push(obj_field_error);
}


// borrower validation

let emailExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

if (bundle.inputData.hasOwnProperty('email') && !emailExp.test(bundle.inputData.email)) {
  options.body.borrowers[0].email = "fixthisemail@invalidemail.com";  
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].email";
  obj_field_error.error_message = "Invalid value. Setting default vaule. This field should be in a valid email fromat";
    
  arr_bad_input_fields.push(obj_field_error);
}

if (bundle.inputData.hasOwnProperty('salutation')) {
    if (isString(bundle.inputData.salutation))
    {
      bundle.inputData.salutation = salutationStringToNum(bundle.inputData.salutation)
      options.body.borrowers[0].salutation = bundle.inputData.salutation;
    }
    if (!(bundle.inputData.salutation >= 1 && bundle.inputData.salutation <= 7)) {
  delete options.body.borrowers[0].salutation;
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].salutation";
  obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see Saultations values at: https://newton.ca/developers/velocity-api/#enumerations";
    
  arr_bad_input_fields.push(obj_field_error);
    }
}

if (bundle.inputData.hasOwnProperty('suffix')) {
    if (isString(bundle.inputData.suffix))
    {
      bundle.inputData.suffix = suffixStringToNum  (bundle.inputData.suffix)
      options.body.borrowers[0].suffix = bundle.inputData.suffix;
    }
    if (!(bundle.inputData.suffix >= 1 && bundle.inputData.suffix <= 2)) {
        delete options.body.borrowers[0].suffix;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].suffix";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see Suffix values at: https://newton.ca/developers/velocity-api/#enumerations";
                
        arr_bad_input_fields.push(obj_field_error);
    }
}
      
if (bundle.inputData.hasOwnProperty('contactPreference')) {
    if (isString(bundle.inputData.contactPreference))
    {
      bundle.inputData.contactPreference = contactPreferenceStringToNum(bundle.inputData.contactPreference)
      options.body.borrowers[0].contactPreference = bundle.inputData.contactPreference;
    }
    if(!(bundle.inputData.contactPreference >= 1 && bundle.inputData.contactPreference <= 4))
    {
        delete options.body.borrowers[0].contactPreference;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].contactPreference";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see contactPreference values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
}

if (bundle.inputData.hasOwnProperty('maritalStatus')) {
    if (isString(bundle.inputData.maritalStatus))
    {
      bundle.inputData.maritalStatus = maritalStatusStringToNum(bundle.inputData.maritalStatus)
      options.body.borrowers[0].maritalStatus = bundle.inputData.maritalStatus;
    }
    if(!(bundle.inputData.maritalStatus >= 1 && bundle.inputData.maritalStatus <= 6))
    {
        delete options.body.borrowers[0].maritalStatus;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].maritalStatus";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see maritalStatus values at: https://newton.ca/developers/velocity-api/#enumerations";
                
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

if (bundle.inputData.hasOwnProperty('residentType')) {
    if (isString(bundle.inputData.residentType))
    {
      bundle.inputData.residentType = residentTypeStringToNum(bundle.inputData.residentType)
      options.body.borrowers[0].residentType = bundle.inputData.residentType;
    }
    if (!(bundle.inputData.residentType >= 1 && bundle.inputData.residentType <= 4)) 
    {
        delete options.body.borrowers[0].residentType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].residentType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see residentTypevalues at: https://newton.ca/developers/velocity-api/#enumerations";
                
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

if (bundle.inputData.hasOwnProperty('correspondenceLanguage')) {
    if (isString(bundle.inputData.correspondenceLanguage))
    {
      bundle.inputData.correspondenceLanguage = languageStringToNum(bundle.inputData.correspondenceLanguage)
      options.body.borrowers[0].correspondenceLanguage = bundle.inputData.correspondenceLanguage;
    }
    if (!(bundle.inputData.correspondenceLanguage >= 1 && bundle.inputData.correspondenceLanguage <= 2)) {
        delete options.body.borrowers[0].correspondenceLanguage;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].correspondenceLanguage";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see correspondenceLanguage values at: https://newton.ca/developers/velocity-api/#enumerations";
                
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

var regExpPhone = /[0-9]+/;
if (bundle.inputData.hasOwnProperty('homePhone') && !(regExpPhone.test(bundle.inputData.homePhone) && bundle.inputData.homePhone.length == 10)) {
  if ((bundle.inputData.hasOwnProperty('contactPreference') && bundle.inputData.contactPreference == 1)) {
    options.body.borrowers[0].homePhone = "1111111111";
  } else {
    delete options.body.borrowers[0].homePhone;
  }
  
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].homePhone";
  obj_field_error.error_message = "Invalid value. Ignoring field. The field HomePhone must contain a 10 digit phone number without any formating";
        
  arr_bad_input_fields.push(obj_field_error);
}

if (!bundle.inputData.hasOwnProperty('contactPreference') || (bundle.inputData.hasOwnProperty('cellPhone') && !(regExpPhone.test(bundle.inputData.cellPhone) && bundle.inputData.cellPhone.length == 10))) {
  if (!bundle.inputData.hasOwnProperty('contactPreference') || (bundle.inputData.hasOwnProperty('contactPreference') && bundle.inputData.contactPreference == 2) || (bundle.inputData.hasOwnProperty('contactPreference') && bundle.inputData.contactPreference == 0)) {
    options.body.borrowers[0].cellPhone = "1111111111";
  } else {
    delete options.body.borrowers[0].cellPhone;
  }
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].cellPhone";
  obj_field_error.error_message = "Invalid value. Ignoring field. The field cellPhone must contain a 10 digit phone number without any formating";
        
  arr_bad_input_fields.push(obj_field_error);
}

if (bundle.inputData.hasOwnProperty('businessPhone') && !(regExpPhone.test(bundle.inputData.cellPhone) && bundle.inputData.businessPhone.length == 10)) {
  if ((bundle.inputData.hasOwnProperty('contactPreference') && bundle.inputData.contactPreference == 4)) {
    options.body.borrowers[0].businessPhone = "1111111111";
  } else {
    delete options.body.borrowers[0].businessPhone;
  }
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].businessPhone";
  obj_field_error.error_message = "Invalid value. Ignoring field. The field businessPhone must contain a 10 digit phone number without any formating";
        
  arr_bad_input_fields.push(obj_field_error);
}

if (bundle.inputData.hasOwnProperty('dateofBirth') && !dateExp.test(bundle.inputData.dateOfBirth)) {
  delete options.body.borrowers[0].dateOfBirth;
  let obj_field_error = {};
  obj_field_error.field_name = "borrowers[0].dateOfBirth";
  obj_field_error.error_message = "Invalid value. Ignoring field. Needs to be in 2019-08-24T14:15:22Z format";
  
  arr_bad_input_fields.push(obj_field_error);  
}

// borrower address
if (bundle.inputData.hasOwnProperty('borrowerAddressStreetType')) {
    if (isString(bundle.inputData.borrowerAddressStreetType))
    {
      bundle.inputData.borrowerAddressStreetType = typeStringtoNum(bundle.inputData.borrowerAddressStreetType)
      options.body.borrowers[0].addresses[0].streetType = bundle.inputData.borrowerAddressStreetType;
    }
    let temp_street_type = Math.floor(bundle.inputData.borrowerAddressStreetType/10);
    if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
      delete options.body.borrowers[0].addresses[0].streetType;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].addresses[0].streetType";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
      arr_bad_input_fields.push(obj_field_error);
    }
  }

if (bundle.inputData.hasOwnProperty('borrowerAddressStreetDirection')) {
  if (isString(bundle.inputData.borrowerAddressStreetDirection))
  {
    bundle.inputData.borrowerAddressStreetDirection = directionStringToNum(bundle.inputData.borrowerAddressStreetDirection);
    options.body.borrowers[0].addresses[0].streetDirection = bundle.inputData.borrowerAddressStreetDirection;
  }
  if(!(bundle.inputData.borrowerAddressStreetDirection >= 1 && bundle.inputData.borrowerAddressStreetDirection <= 8))
  {
      delete options.body.borrowers[0].addresses[0].streetDirection;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].addresses[0].streetDirection";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
          
      arr_bad_input_fields.push(obj_field_error);
  }
}

if (bundle.inputData.hasOwnProperty('borrowerAddressCountry')) {
    if (isString(bundle.inputData.borrowerAddressCountry))
    {
        bundle.inputData.borrowerAddressCountry = countryStringToNum(bundle.inputData.borrowerAddressCountry);
        options.body.borrowers[0].addresses[0].country = bundle.inputData.borrowerAddressCountry;
    }
    if (!(bundle.inputData.borrowerAddressCountry >= 1 && bundle.inputData.borrowerAddressCountry <= 2)) {
        delete options.body.borrowers[0].addresses[0].country;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].addresses[0].country";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
  
}


if (bundle.inputData.hasOwnProperty('borrowerEmploymentJobType')) {
    if (isString(bundle.inputData.borrowerEmploymentJobType))
    {
        bundle.inputData.borrowerEmploymentJobType = jobTypeStringToNum(bundle.inputData.borrowerEmploymentJobType);
        options.body.borrowers[0].employmentHistory[0].jobType = bundle.inputData.borrowerEmploymentJobType;
    }
    if (!(bundle.inputData.borrowerEmploymentJobType >= 1 && bundle.inputData.borrowerEmploymentJobType <= 9)) {
        delete options.body.borrowers[0].employmentHistory[0].jobType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].employmentHistory[0].jobType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see JobType values at: https://newton.ca/developers/velocity-api/#enumerations";
        arr_bad_input_fields.push(obj_field_error);
    }
}

if (bundle.inputData.hasOwnProperty('borrowerEmploymentType')) {
    if (isString(bundle.inputData.borrowerEmploymentType))
    {
        bundle.inputData.borrowerEmploymentType = employmentTypeStringToNum(bundle.inputData.borrowerEmploymentType);
        options.body.borrowers[0].employmentHistory[0].employmentType = bundle.inputData.borrowerEmploymentType;
    }
    if (!(bundle.inputData.borrowerEmploymentType >= 1 && bundle.inputData.borrowerEmploymentType <= 3)) {
        delete options.body.borrowers[0].employmentHistory[0].employmentType;
        let obj_field_error = {};
        obj_field_error.field_name = ".borrowers[0].employmentHistory[0].employmentType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see employmentType values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

if (bundle.inputData.hasOwnProperty('borrowerEmploymentIndustrySector')) {
    if (isString(bundle.inputData.borrowerEmploymentIndustrySector))
    {
        bundle.inputData.borrowerEmploymentIndustrySector = industrySectorStringToNum(bundle.inputData.borrowerEmploymentIndustrySector);
        options.body.borrowers[0].employmentHistory[0].industrySector = bundle.inputData.borrowerEmploymentIndustrySector;
    }
    if (!(bundle.inputData.borrowerEmploymentIndustrySector >= 1 && bundle.inputData.borrowerEmploymentIndustrySector <= 14)) {
        delete options.body.borrowers[0].employmentHistory[0].industrySector;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].employmentHistory[0].industrySector";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see industrySector values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

if (bundle.inputData.hasOwnProperty('borrowerEmploymentIncomeType')) {

    if (isString(bundle.inputData.borrowerEmploymentIncomeType))
    {
        bundle.inputData.borrowerEmploymentIncomeType = incomeTypeStringToNum(bundle.inputData.borrowerEmploymentIncomeType);
        options.body.borrowers[0].employmentHistory[0].incomeType = bundle.inputData.borrowerEmploymentIncomeType;
    }
    if (!(bundle.inputData.borrowerEmploymentIncomeType >= 1 && bundle.inputData.borrowerEmploymentIncomeType <= 6)) {
        delete options.body.borrowers[0].employmentHistory[0].incomeType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].employmentHistory[0].incomeType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see incomeType values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
  
}

if (bundle.inputData.hasOwnProperty('borrowerEmploymentIncomePeriod')) {
    if (isString(bundle.inputData.borrowerEmploymentIncomePeriod))
    {
        bundle.inputData.borrowerEmploymentIncomePeriod = incomePeriodStringToNum(bundle.inputData.borrowerEmploymentIncomePeriod);
        options.body.borrowers[0].employmentHistory[0].incomePeriod = bundle.inputData.borrowerEmploymentIncomePeriod;
    }
    if (!(bundle.inputData.borrowerEmploymentIncomePeriod >= 1 && bundle.inputData.borrowerEmploymentIncomePeriod <= 7)) {
        delete options.body.borrowers[0].employmentHistory[0].incomePeriod;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].employmentHistory[0].incomePeriod";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see incomePeriod values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
}

  if (bundle.inputData.hasOwnProperty('borrowerEmploymentStreetDirection')) {
    if (isString(bundle.inputData.borrowerEmploymentStreetDirection))
    {
      bundle.inputData.borrowerEmploymentStreetDirection = directionStringToNum(bundle.inputData.borrowerEmploymentStreetDirection);
      options.body.borrowers[0].employmentHistory[0].streetDirection = bundle.inputData.borrowerEmploymentStreetDirection;
    }
  
  if(!(bundle.inputData.borrowerEmploymentStreetDirection >= 1 && bundle.inputData.borrowerEmploymentStreetDirection <= 8))
  {
      delete options.body.borrowers[0].employmentHistory[0].streetDirection;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].employmentHistory[0].streetDirection";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
      
      arr_bad_input_fields.push(obj_field_error);
  }
}

if (bundle.inputData.hasOwnProperty('borrowerEmploymentStreetType')) {
    if (isString(bundle.inputData.borrowerEmploymentStreetType))
    {
      bundle.inputData.borrowerEmploymentStreetType = typeStringtoNum(bundle.inputData.borrowerEmploymentStreetType)
      options.body.borrowers[0].employmentHistory[0].streetType = bundle.inputData.borrowerEmploymentStreetType;
    }
    let temp_street_type = Math.floor(bundle.inputData.borrowerEmploymentStreetType/10);
    if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
      delete options.body.borrowers[0].employmentHistory[0].streetType;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].employmentHistory[0].streetType";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
      arr_bad_input_fields.push(obj_field_error);
    }
  }
  if (bundle.inputData.hasOwnProperty('borrowerEmploymentCountry')) {
    if (isString(bundle.inputData.borrowerEmploymentCountry))
    {
      bundle.inputData.borrowerEmploymentCountry = countryStringToNum(bundle.inputData.borrowerEmploymentCountry)
      options.body.borrowers[0].employmentHistory[0].country = bundle.inputData.borrowerEmploymentCountry;
    }
      if (!(bundle.inputData.borrowerEmploymentCountry >= 1 && bundle.inputData.borrowerEmploymentCountry <= 2)) {
        delete options.body.borrowers[0].employmentHistory[0].country;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].employmentHistory[0].country";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }
  if (bundle.inputData.hasOwnProperty('borrowerOtherIncomeType')) {
    if (isString(bundle.inputData.borrowerOtherIncomeType))
    {
      bundle.inputData.borrowerOtherIncomeType = otherIncomeTypeStringToNum(bundle.inputData.borrowerOtherIncomeType)
      options.body.borrowers[0].otherIncomes[0].type = bundle.inputData.borrowerOtherIncomeType;
    }
      if (!(bundle.inputData.borrowerOtherIncomeType >= 1 && bundle.inputData.borrowerOtherIncomeType <= 5)) {
        delete options.body.borrowers[0].otherIncomes[0].type;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].otherIncomes[0].type";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see OtherIncomeTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }
  if (bundle.inputData.hasOwnProperty('borrowerOtherIncomePeriod')) {
    if (isString(bundle.inputData.borrowerOtherIncomePeriod))
    {
      bundle.inputData.borrowerOtherIncomePeriod = otherIncomePeriodStringToNum(bundle.inputData.borrowerOtherIncomePeriod)
      options.body.borrowers[0].otherIncomes[0].incomePeriod = bundle.inputData.borrowerOtherIncomePeriod;
    }
    if (!(bundle.inputData.borrowerOtherIncomePeriod >= 1 && bundle.inputData.borrowerOtherIncomePeriod <= 7)) {
        delete options.body.borrowers[0].otherIncomes[0].incomePeriod;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].otherIncomes[0].incomePeriod";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see OtherIncomePeriods values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
    
  }
  if (bundle.inputData.hasOwnProperty('borrowerAssetType')) {
    if (isString(bundle.inputData.borrowerAssetType))
    {
      bundle.inputData.borrowerAssetType = assetTypeStringToNum(bundle.inputData.borrowerAssetType)
      options.body.borrowers[0].assets[0].type = bundle.inputData.borrowerAssetType;
    }
      if (!(bundle.inputData.borrowerAssetType >= 1 && bundle.inputData.borrowerAssetType <= 9)) {
        delete options.body.borrowers[0].assets[0].type;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].assets[0].type";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see borrowerAssetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }
  if (bundle.inputData.hasOwnProperty('borrowerPropertyOccupancy')) {
    if (isString(bundle.inputData.borrowerPropertyOccupancy))
    {
      bundle.inputData.borrowerPropertyOccupancy = occupanyStringToNum(bundle.inputData.borrowerPropertyOccupancy)
      options.body.borrowers[0].properties[0].occupancy = bundle.inputData.borrowerPropertyOccupancy;
    }
      if (!(bundle.inputData.borrowerPropertyOccupancy >= 1 && bundle.inputData.borrowerPropertyOccupancy <= 4)) {
        delete options.body.borrowers[0].properties[0].occupancy;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].occupancy";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see borrowerPropertyOccupancy values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
  }
  if (bundle.inputData.hasOwnProperty('borrowerPropertyFutureStatus')) {
    if (isString(bundle.inputData.borrowerPropertyFutureStatus))
    {
      bundle.inputData.borrowerPropertyFutureStatus = propertyFutureStatusStringToNum(bundle.inputData.borrowerPropertyFutureStatus)
      options.body.borrowers[0].properties[0].futureStatus = bundle.inputData.borrowerPropertyFutureStatus;
    }
      if (!(bundle.inputData.borrowerPropertyFutureStatus >= 1 && bundle.inputData.borrowerPropertyFutureStatus <= 3)) {
        delete options.body.borrowers[0].properties[0].futureStatus;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].futureStatus";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyFutureStatus values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }
  if (bundle.inputData.hasOwnProperty('borrowerPropertyStreetType')) {
    if (isString(bundle.inputData.borrowerPropertyStreetType))
    {
      bundle.inputData.borrowerPropertyStreetType = typeStringtoNum(bundle.inputData.borrowerPropertyStreetType)
      options.body.borrowers[0].properties[0].streetType = bundle.inputData.borrowerPropertyStreetType;
    }
    let temp_street_type = Math.floor(bundle.inputData.borrowerPropertyStreetType/10);
    if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
      delete options.body.borrowers[0].properties[0].streetType;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].properties[0].streetType";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
      arr_bad_input_fields.push(obj_field_error);
    }
  }
  
  if (bundle.inputData.hasOwnProperty('borrowerPropertyStreetDirection')) {
    if (isString(bundle.inputData.borrowerPropertyStreetDirection))
    {
      bundle.inputData.borrowerPropertyStreetDirection = directionStringToNum(bundle.inputData.borrowerPropertyStreetDirection);
      options.body.borrowers[0].properties[0].streetDirection = bundle.inputData.borrowerPropertyStreetDirection;
    }
  
  if(!(bundle.inputData.borrowerPropertyStreetDirection >= 1 && bundle.inputData.borrowerPropertyStreetDirection <= 8))
  {
      delete options.body.borrowers[0].properties[0].streetDirection;
      let obj_field_error = {};
      obj_field_error.field_name = "borrowers[0].properties[0].streetDirection";
      obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
      
      arr_bad_input_fields.push(obj_field_error);
  }
}


  if (bundle.inputData.hasOwnProperty('borrowerPropertyCountry')) {
    if (isString(bundle.inputData.borrowerPropertyCountry))
    {
      bundle.inputData.borrowerPropertyCountry = countryStringToNum(bundle.inputData.borrowerPropertyCountry);
      options.body.borrowers[0].properties[0].country = bundle.inputData.borrowerPropertyCountry;
    }
      if (!(bundle.inputData.borrowerPropertyCountry >= 1 && bundle.inputData.borrowerPropertyCountry <= 2)) {
        delete options.body.borrowers[0].properties[0].country;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].country";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }

  if (bundle.inputData.hasOwnProperty('propertyMortgagePaymentFrequency')) {
    if (isString(bundle.inputData.propertyMortgagePaymentFrequency))
    {
      bundle.inputData.propertyMortgagePaymentFrequency = mortgagePaymentFrequencyStringToNum(bundle.inputData.propertyMortgagePaymentFrequency);
      options.body.borrowers[0].properties[0].mortgages[0].paymentFrequency = bundle.inputData.propertyMortgagePaymentFrequency;
    }
    if (!(bundle.inputData.propertyMortgagePaymentFrequency >= 1 && bundle.inputData.propertyMortgagePaymentFrequency <= 6)) {
        delete options.body.borrowers[0].properties[0].mortgages[0].paymentFrequency;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].mortgages[0].paymentFrequency";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgagePaymentFrequency values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
    }
    
  }

  if (bundle.inputData.hasOwnProperty('propertyMortgagePayoffType')) {
    if (isString(bundle.inputData.propertyMortgagePayoffType))
    {
      bundle.inputData.propertyMortgagePayoffType = mortgagePaymentFrequencyStringToNum(bundle.inputData.propertyMortgagePayoffType);
      options.body.borrowers[0].properties[0].mortgages[0].paymentFrequency = bundle.inputData.propertyMortgagePayoffType;
    }
      if (!(bundle.inputData.propertyMortgagePayoffType >= 1 && bundle.inputData.propertyMortgagePayoffType <= 2)) {
        delete options.body.borrowers[0].properties[0].mortgages[0].payoffType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].mortgages[0].payoffType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgagePayOffTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }

  if (bundle.inputData.hasOwnProperty('propertyMortgageRateType')) {
    if (isString(bundle.inputData.propertyMortgageRateType))
    {
      bundle.inputData.propertyMortgageRateType = mortgageRateTypesStringToNum(bundle.inputData.propertyMortgageRateType);
      options.body.borrowers[0].properties[0].mortgages[0].rateType = bundle.inputData.propertyMortgageRateType;
    }
      if (!(bundle.inputData.propertyMortgageRateType >= 1 && bundle.inputData.propertyMortgageRateType <= 5)) {
        delete options.body.borrowers[0].properties[0].mortgages[0].rateType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].mortgages[0].rateType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageRateTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }

  if (bundle.inputData.hasOwnProperty('propertyMortgageTermType')) {
    if (isString(bundle.inputData.propertyMortgageTermType))
    {
      bundle.inputData.propertyMortgageTermType = mortgageTermTypesStringToNum(bundle.inputData.propertyMortgageTermType);
      options.body.borrowers[0].properties[0].mortgages[0].termType = bundle.inputData.propertyMortgageTermType;
    }
      if (!(bundle.inputData.propertyMortgageTermType >= 1 && bundle.inputData.propertyMortgageTermType <= 3)) {
        delete options.body.borrowers[0].properties[0].mortgages[0].termType;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].mortgages[0].termType";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageTermTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }

  if (bundle.inputData.hasOwnProperty('propertyMortgageInsurer')) {
    if (isString(bundle.inputData.propertyMortgageInsurer))
    {
      bundle.inputData.propertyMortgageInsurer = insurerStringToNum(bundle.inputData.propertyMortgageInsurer);
      options.body.borrowers[0].properties[0].mortgages[0].insurer = bundle.inputData.propertyMortgageInsurer;
    }
      if (!(bundle.inputData.propertyMortgageInsurer >= 1 && bundle.inputData.propertyMortgageInsurer <= 3)) {
        delete options.body.borrowers[0].properties[0].mortgages[0].insurer;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers[0].properties[0].mortgages[0].insurer";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageInsurers values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }
  if (bundle.inputData.hasOwnProperty('referralType')) {
    if (isString(bundle.inputData.referralType))
    {
      bundle.inputData.referralType = referralTypeStringToNum(bundle.inputData.referralType);
      options.body.referral.type = bundle.inputData.referralType;
    }
      if (!(bundle.inputData.referralType >= 1 && bundle.inputData.referralType <= 3)) {
        delete options.body.referral.type;
        let obj_field_error = {};
        obj_field_error.field_name = "referral.type";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see referralTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            
        arr_bad_input_fields.push(obj_field_error);
      }
    
  }

  for (i = 1; i < 10; i++) {
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_email')) {
        var borrower_email = 'borrower'+i.toString()+'_email';
        if(!emailExp.test(bundle.inputData[borrower_email])) {
            options.body.borrowers[i].email = "fixthisemail@invalidemail.com";  
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].email";
            obj_field_error.error_message = "Invalid value. Setting default vaule. This field should be in a valid email fromat";
            
            arr_bad_input_fields.push(obj_field_error);
        }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_salutation')) {
        var borrower_salutation = 'borrower'+i.toString()+'_salutation';
          if (isString(bundle.inputData[borrower_salutation]))
          {
            bundle.inputData[borrower_salutation] = salutationStringToNum(bundle.inputData[borrower_salutation])
            options.body.borrowers[i].salutation = bundle.inputData[borrower_salutation];
          }
          if (!(bundle.inputData[borrower_salutation] >= 1 && bundle.inputData[borrower_salutation] <= 7)) {
        delete options.body.borrowers[i].salutation;
        let obj_field_error = {};
        obj_field_error.field_name = "borrowers["+i+"].salutation";
        obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see Saultations values at: https://newton.ca/developers/velocity-api/#enumerations";
          
        arr_bad_input_fields.push(obj_field_error);
          }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_suffix')) {
        var borrower_suffix = 'borrower'+i.toString()+'_suffix';
          if (isString(bundle.inputData[borrower_suffix]))
          {
            bundle.inputData[borrower_suffix] = suffixStringToNum  (bundle.inputData[borrower_suffix])
            options.body.borrowers[i].suffix = bundle.inputData[borrower_suffix];
          }
          if (!(bundle.inputData[borrower_suffix] >= 1 && bundle.inputData[borrower_suffix] <= 2)) {
              delete options.body.borrowers[i].suffix;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].suffix";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see Suffix values at: https://newton.ca/developers/velocity-api/#enumerations";
                      
              arr_bad_input_fields.push(obj_field_error);
          }
      }
            
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_contactPreference')) {
        var borrower_contactPreference = 'borrower'+i.toString()+'_contactPreference';
          if (isString(bundle.inputData[borrower_contactPreference]))
          {
            bundle.inputData[borrower_contactPreference] = contactPreferenceStringToNum(bundle.inputData[borrower_contactPreference])
            options.body.borrowers[i].contactPreference = bundle.inputData[borrower_contactPreference];
          }
          if(!(bundle.inputData[borrower_contactPreference] >= 1 && bundle.inputData[borrower_contactPreference] <= 4))
          {
              delete options.body.borrowers[i].contactPreference;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].contactPreference";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see contactPreference values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_maritalStatus')) {
        var borrower_maritalStatus = 'borrower'+i.toString()+'_maritalStatus';
          if (isString(bundle.inputData[borrower_maritalStatus]))
          {
            bundle.inputData[borrower_maritalStatus] = maritalStatusStringToNum(bundle.inputData[borrower_maritalStatus])
            options.body.borrowers[i].maritalStatus = bundle.inputData[borrower_maritalStatus];
          }
          if(!(bundle.inputData[borrower_maritalStatus] >= 1 && bundle.inputData[borrower_maritalStatus] <= 6))
          {
              delete options.body.borrowers[i].maritalStatus;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].maritalStatus";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see maritalStatus values at: https://newton.ca/developers/velocity-api/#enumerations";
                      
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_residentType')) {
        var borrower_residentType = 'borrower'+i.toString()+'_residentType';
          if (isString(bundle.inputData[borrower_residentType]))
          {
            bundle.inputData[borrower_residentType] = residentTypeStringToNum(bundle.inputData[borrower_residentType])
            options.body.borrowers[i].residentType = bundle.inputData[borrower_residentType];
          }
          if (!(bundle.inputData[borrower_residentType] >= 1 && bundle.inputData[borrower_residentType] <= 4)) 
          {
              delete options.body.borrowers[i].residentType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].residentType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see residentTypevalues at: https://newton.ca/developers/velocity-api/#enumerations";
                      
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_correspondenceLanguage')) {
        var borrower_correspondenceLanguage = 'borrower'+i.toString()+'_correspondenceLanguage';
          if (isString(bundle.inputData[borrower_correspondenceLanguage]))
          {
            bundle.inputData[borrower_correspondenceLanguage] = languageStringToNum(bundle.inputData[borrower_correspondenceLanguage])
            options.body.borrowers[i].correspondenceLanguage = bundle.inputData[borrower_correspondenceLanguage];
          }
          if (!(bundle.inputData[borrower_correspondenceLanguage] >= 1 && bundle.inputData[borrower_correspondenceLanguage] <= 2)) {
              delete options.body.borrowers[i].correspondenceLanguage;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].correspondenceLanguage";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see correspondenceLanguage values at: https://newton.ca/developers/velocity-api/#enumerations";
                      
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }

      
      
      
        var borrower_businessPhone = 'borrower'+i.toString()+'';
        var regExpPhone = /[0-9]+/;
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_homePhone')) {
        var borrower_homePhone = 'borrower'+i.toString()+'_homePhone';
       if (!(regExpPhone.test(bundle.inputData[borrower_homePhone]) && bundle.inputData[borrower_homePhone].length == 10)) {
            if ((bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_contactPreference'))) {
                var borrower_contactPreference = 'borrower'+i.toString()+'_contactPreference';
                if (bundle.inputData[borrower_contactPreference] == 1) {
                    options.body.borrowers[i].homePhone = "1111111111";
                }
                else {
                    delete options.body.borrowers[i].homePhone;
                }
            } 
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].homePhone";
            obj_field_error.error_message = "Invalid value. Ignoring field. The field HomePhone must contain a 10 digit phone number without any formating";
                    
            arr_bad_input_fields.push(obj_field_error);
       }
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_cellPhone')) {
        var borrower_cellPhone = 'borrower'+i.toString()+'_cellPhone';
       if (!(regExpPhone.test(bundle.inputData[borrower_cellPhone]) && bundle.inputData[borrower_cellPhone].length == 10)) {
            if ((bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_contactPreference'))) {
                var borrower_contactPreference = 'borrower'+i.toString()+'_contactPreference';
                if (bundle.inputData[borrower_contactPreference] == 1) {
                    options.body.borrowers[i].homePhone = "1111111111";
                }
                else {
                    delete options.body.borrowers[i].homePhone;
                }
            } 
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].homePhone";
            obj_field_error.error_message = "Invalid value. Ignoring field. The field HomePhone must contain a 10 digit phone number without any formating";
                    
            arr_bad_input_fields.push(obj_field_error);
       }
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_businessPhone')) {
        var borrower_businessPhone = 'borrower'+i.toString()+'_businessPhone';
       if (!(regExpPhone.test(bundle.inputData[borrower_businessPhone]) && bundle.inputData[borrower_businessPhone].length == 10)) {
            if ((bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_contactPreference'))) {
                var borrower_contactPreference = 'borrower'+i.toString()+'_contactPreference';
                if (bundle.inputData[borrower_contactPreference] == 1) {
                    options.body.borrowers[i].homePhone = "1111111111";
                }
                else {
                    delete options.body.borrowers[i].homePhone;
                }
            } 
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].homePhone";
            obj_field_error.error_message = "Invalid value. Ignoring field. The field HomePhone must contain a 10 digit phone number without any formating";
                    
            arr_bad_input_fields.push(obj_field_error);
       }
    }
      
      
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_dateofBirth') ) {
        var borrower_dateOfBirth = 'borrower'+i.toString()+'_dateOfBirth';
          if (!dateExp.test(bundle.inputData[dateOfBirth])) {
            delete options.body.borrowers[i].dateOfBirth;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].dateOfBirth";
            obj_field_error.error_message = "Invalid value. Ignoring field. Needs to be in 2019-08-24T14:15:22Z format";
            
            arr_bad_input_fields.push(obj_field_error);  
          }
        
      }
      
      // borrower address
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressStreetType')) {
        var borrower_AddressStreetType = 'borrower'+i.toString()+'_AddressStreetType';
          if (isString(bundle.inputData[borrower_AddressStreetType]))
          {
            bundle.inputData[borrower_AddressStreetType] = typeStringtoNum(bundle.inputData[borrower_AddressStreetType])
            options.body.borrowers[i].addresses[0].streetType = bundle.inputData[borrower_AddressStreetType];
          }
          let temp_street_type = Math.floor(bundle.inputData[borrower_AddressStreetType]/10);
          if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
            delete options.body.borrowers[i].addresses[0].streetType;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].addresses[0].streetType";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            arr_bad_input_fields.push(obj_field_error);
          }
        }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressStreetDirection')) {
        var borrower_AddressStreetDirection = 'borrower'+i.toString()+'_AddressStreetDirection';
        if (isString(bundle.inputData[borrower_AddressStreetDirection]))
        {
          bundle.inputData[borrower_AddressStreetDirection] = directionStringToNum(bundle.inputData[borrower_AddressStreetDirection]);
          options.body.borrowers[i].addresses[0].streetDirection = bundle.inputData[borrower_AddressStreetDirection];
        }
        if(!(bundle.inputData[borrower_AddressStreetDirection] >= 1 && bundle.inputData[borrower_AddressStreetDirection] <= 8))
        {
            delete options.body.borrowers[i].addresses[0].streetDirection;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].addresses[0].streetDirection";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
                
            arr_bad_input_fields.push(obj_field_error);
        }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressCountry')) {
        var borrower_AddressCountry = 'borrower'+i.toString()+'_AddressCountry';
          if (isString(bundle.inputData[borrower_AddressCountry]))
          {
              bundle.inputData[borrower_AddressCountry] = countryStringToNum(bundle.inputData[borrower_AddressCountry]);
              options.body.borrowers[i].addresses[0].country = bundle.inputData[borrower_AddressCountry];
          }
          if (!(bundle.inputData[borrower_AddressCountry] >= 1 && bundle.inputData[borrower_AddressCountry] <= 2)) {
              delete options.body.borrowers[i].addresses[0].country;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].addresses[0].country";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentJobType')) {
        var borrower_EmploymentJobType = 'borrower'+i.toString()+'_EmploymentJobType';
          if (isString(bundle.inputData[borrower_EmploymentJobType]))
          {
              bundle.inputData[borrower_EmploymentJobType] = jobTypeStringToNum(bundle.inputData[borrower_EmploymentJobType]);
              options.body.borrowers[i].employmentHistory[0].jobType = bundle.inputData[borrower_EmploymentJobType];
          }
          if (!(bundle.inputData[borrower_EmploymentJobType] >= 1 && bundle.inputData[borrower_EmploymentJobType] <= 9)) {
              delete options.body.borrowers[i].employmentHistory[0].jobType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].jobType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see JobType values at: https://newton.ca/developers/velocity-api/#enumerations";
              arr_bad_input_fields.push(obj_field_error);
          }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentType')) {
        var borrower_EmploymentType = 'borrower'+i.toString()+'_EmploymentType';
          if (isString(bundle.inputData[borrower_EmploymentType]))
          {
              bundle.inputData[borrower_EmploymentType] = employmentTypeStringToNum(bundle.inputData[borrower_EmploymentType]);
              options.body.borrowers[i].employmentHistory[0].employmentType = bundle.inputData[borrower_EmploymentType];
          }
          if (!(bundle.inputData[borrower_EmploymentType] >= 1 && bundle.inputData[borrower_EmploymentType] <= 3)) {
              delete options.body.borrowers[i].employmentHistory[0].employmentType;
              let obj_field_error = {};
              obj_field_error.field_name = ".borrowers[i].employmentHistory[0].employmentType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see employmentType values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentIndustrySector')) {
        var borrower_EmploymentIndustrySector = 'borrower'+i.toString()+'_EmploymentIndustrySector';
          if (isString(bundle.inputData[borrower_EmploymentIndustrySector]))
          {
              bundle.inputData[borrower_EmploymentIndustrySector] = industrySectorStringToNum(bundle.inputData[borrower_EmploymentIndustrySector]);
              options.body.borrowers[i].employmentHistory[0].industrySector = bundle.inputData[borrower_EmploymentIndustrySector];
          }
          if (!(bundle.inputData[borrower_EmploymentIndustrySector] >= 1 && bundle.inputData[borrower_EmploymentIndustrySector] <= 14)) {
              delete options.body.borrowers[i].employmentHistory[0].industrySector;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].industrySector";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see industrySector values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentIncomeType')) {
        var borrower_EmploymentIncomeType = 'borrower'+i.toString()+'_EmploymentIncomeType';
      
          if (isString(bundle.inputData[borrower_EmploymentIncomeType]))
          {
              bundle.inputData[borrower_EmploymentIncomeType] = incomeTypeStringToNum(bundle.inputData[borrower_EmploymentIncomeType]);
              options.body.borrowers[i].employmentHistory[0].incomeType = bundle.inputData[borrower_EmploymentIncomeType];
          }
          if (!(bundle.inputData[borrower_EmploymentIncomeType] >= 1 && bundle.inputData[borrower_EmploymentIncomeType] <= 6)) {
              delete options.body.borrowers[i].employmentHistory[0].incomeType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].incomeType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see incomeType values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
        
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentIncomePeriod')) {
        var borrower_EmploymentIncomePeriod = 'borrower'+i.toString()+'_EmploymentIncomePeriod';
          if (isString(bundle.inputData[borrower_EmploymentIncomePeriod]))
          {
              bundle.inputData[borrower_EmploymentIncomePeriod] = incomePeriodStringToNum(bundle.inputData[borrower_EmploymentIncomePeriod]);
              options.body.borrowers[i].employmentHistory[0].incomePeriod = bundle.inputData[borrower_EmploymentIncomePeriod];
          }
          if (!(bundle.inputData[borrower_EmploymentIncomePeriod] >= 1 && bundle.inputData[borrower_EmploymentIncomePeriod] <= 7)) {
              delete options.body.borrowers[i].employmentHistory[0].incomePeriod;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].incomePeriod";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see incomePeriod values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
      }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentStreetDirection')) {
            var borrower_EmploymentStreetDirection = 'borrower'+i.toString()+'_EmploymentStreetDirection';
          if (isString(bundle.inputData[borrower_EmploymentStreetDirection]))
          {
            bundle.inputData[borrower_EmploymentStreetDirection] = directionStringToNum(bundle.inputData[borrower_EmploymentStreetDirection]);
            options.body.borrowers[i].employmentHistory[0].streetDirection = bundle.inputData[borrower_EmploymentStreetDirection];
          }
        
        if(!(bundle.inputData[borrower_EmploymentStreetDirection] >= 1 && bundle.inputData[borrower_EmploymentStreetDirection] <= 8))
        {
            delete options.body.borrowers[i].employmentHistory[0].streetDirection;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].streetDirection";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
            
            arr_bad_input_fields.push(obj_field_error);
        }
      }
      
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentStreetType')) {
        var borrower_EmploymentStreetType = 'borrower'+i.toString()+'_EmploymentStreetType';
          if (isString(bundle.inputData[borrower_EmploymentStreetType]))
          {
            bundle.inputData[borrower_EmploymentStreetType] = typeStringtoNum(bundle.inputData[borrower_EmploymentStreetType])
            options.body.borrowers[i].employmentHistory[0].streetType = bundle.inputData[borrower_EmploymentStreetType];
          }
          let temp_street_type = Math.floor(bundle.inputData[borrower_EmploymentStreetType]/10);
          if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
            delete options.body.borrowers[i].employmentHistory[0].streetType;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].streetType";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            arr_bad_input_fields.push(obj_field_error);
          }
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentCountry')) {
            var borrower_EmploymentCountry = 'borrower'+i.toString()+'_EmploymentCountry';
          if (isString(bundle.inputData[borrower_EmploymentCountry]))
          {
            bundle.inputData[borrower_EmploymentCountry] = countryStringToNum(bundle.inputData[borrower_EmploymentCountry])
            options.body.borrowers[i].employmentHistory[0].country = bundle.inputData[borrower_EmploymentCountry];
          }
            if (!(bundle.inputData[borrower_EmploymentCountry] >= 1 && bundle.inputData[borrower_EmploymentCountry] <= 2)) {
              delete options.body.borrowers[i].employmentHistory[0].country;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].employmentHistory[0].country";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_OtherIncomeType')) {
            var borrower_OtherIncomeType = 'borrower'+i.toString()+'_OtherIncomeType';
          if (isString(bundle.inputData[borrower_OtherIncomeType]))
          {
            bundle.inputData[borrower_OtherIncomeType] = otherIncomeTypeStringToNum(bundle.inputData[borrower_OtherIncomeType])
            options.body.borrowers[i].otherIncomes[0].type = bundle.inputData[borrower_OtherIncomeType];
          }
            if (!(bundle.inputData[borrower_OtherIncomeType] >= 1 && bundle.inputData[borrower_OtherIncomeType] <= 5)) {
              delete options.body.borrowers[i].otherIncomes[0].type;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].otherIncomes[0].type";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see OtherIncomeTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_OtherIncomePeriod')) {
            var borrower_OtherIncomePeriod = 'borrower'+i.toString()+'_OtherIncomePeriod';
          if (isString(bundle.inputData[borrower_OtherIncomePeriod]))
          {
            bundle.inputData[borrower_OtherIncomePeriod] = otherIncomePeriodStringToNum(bundle.inputData[borrower_OtherIncomePeriod])
            options.body.borrowers[i].otherIncomes[0].incomePeriod = bundle.inputData[borrower_OtherIncomePeriod];
          }
          if (!(bundle.inputData[borrower_OtherIncomePeriod] >= 1 && bundle.inputData[borrower_OtherIncomePeriod] <= 7)) {
              delete options.body.borrowers[i].otherIncomes[0].incomePeriod;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].otherIncomes[0].incomePeriod";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see OtherIncomePeriods values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
          
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AssetType')) {
            var borrower_AssetType = 'borrower'+i.toString()+'_AssetType';
          if (isString(bundle.inputData[borrower_AssetType]))
          {
            bundle.inputData[borrower_AssetType] = assetTypeStringToNum(bundle.inputData[borrower_AssetType])
            options.body.borrowers[i].assets[0].type = bundle.inputData[borrower_AssetType];
          }
            if (!(bundle.inputData[borrower_AssetType] >= 1 && bundle.inputData[borrower_AssetType] <= 9)) {
              delete options.body.borrowers[i].assets[0].type;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].assets[0].type";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see borrowerAssetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyOccupancy')) {
            var borrower_PropertyOccupancy = 'borrower'+i.toString()+'_PropertyOccupancy';
          if (isString(bundle.inputData[borrower_PropertyOccupancy]))
          {
            bundle.inputData[borrower_PropertyOccupancy] = occupanyStringToNum(bundle.inputData[borrower_PropertyOccupancy])
            options.body.borrowers[i].properties[0].occupancy = bundle.inputData[borrower_PropertyOccupancy];
          }
            if (!(bundle.inputData[borrower_PropertyOccupancy] >= 1 && bundle.inputData[borrower_PropertyOccupancy] <= 4)) {
              delete options.body.borrowers[i].properties[0].occupancy;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].occupancy";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see borrowerPropertyOccupancy values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyFutureStatus')) {
            var borrower_PropertyFutureStatus = 'borrower'+i.toString()+'_PropertyFutureStatus';
          if (isString(bundle.inputData[borrower_PropertyFutureStatus]))
          {
            bundle.inputData[borrower_PropertyFutureStatus] = propertyFutureStatusStringToNum(bundle.inputData[borrower_PropertyFutureStatus])
            options.body.borrowers[i].properties[0].futureStatus = bundle.inputData[borrower_PropertyFutureStatus];
          }
            if (!(bundle.inputData[borrower_PropertyFutureStatus] >= 1 && bundle.inputData[borrower_PropertyFutureStatus] <= 3)) {
              delete options.body.borrowers[i].properties[0].futureStatus;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].futureStatus";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyFutureStatus values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyStreetType')) {
            var borrower_PropertyStreetType = 'borrower'+i.toString()+'_PropertyStreetType';
          if (isString(bundle.inputData[borrower_PropertyStreetType]))
          {
            bundle.inputData[borrower_PropertyStreetType] = typeStringtoNum(bundle.inputData[borrower_PropertyStreetType])
            options.body.borrowers[i].properties[0].streetType = bundle.inputData[borrower_PropertyStreetType];
          }
          let temp_street_type = Math.floor(bundle.inputData[borrower_PropertyStreetType]/10);
          if (!(temp_street_type >= 1 && temp_street_type <= 141)) {
            delete options.body.borrowers[i].properties[0].streetType;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].properties[0].streetType";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
            arr_bad_input_fields.push(obj_field_error);
          }
        }
        
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyStreetDirection')) {
            var borrower_PropertyStreetDirection = 'borrower'+i.toString()+'_PropertyStreetDirection';
          if (isString(bundle.inputData[borrower_PropertyStreetDirection]))
          {
            bundle.inputData[borrower_PropertyStreetDirection] = directionStringToNum(bundle.inputData[borrower_PropertyStreetDirection]);
            options.body.borrowers[i].properties[0].streetDirection = bundle.inputData[borrower_PropertyStreetDirection];
          }
        
        if(!(bundle.inputData[borrower_PropertyStreetDirection] >= 1 && bundle.inputData[borrower_PropertyStreetDirection] <= 8))
        {
            delete options.body.borrowers[i].properties[0].streetDirection;
            let obj_field_error = {};
            obj_field_error.field_name = "borrowers["+i+"].properties[0].streetDirection";
            obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressStreetDirections values at: https://newton.ca/developers/velocity-api/#enumerations";
            
            arr_bad_input_fields.push(obj_field_error);
        }
      }
      
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyCountry')) {
            var borrower_PropertyCountry = 'borrower'+i.toString()+'_PropertyCountry';
          if (isString(bundle.inputData[borrower_PropertyCountry]))
          {
            bundle.inputData[borrower_PropertyCountry] = countryStringToNum(bundle.inputData[borrower_PropertyCountry]);
            options.body.borrowers[i].properties[0].country = bundle.inputData[borrower_PropertyCountry];
          }
            if (!(bundle.inputData[borrower_PropertyCountry] >= 1 && bundle.inputData[borrower_PropertyCountry] <= 2)) {
              delete options.body.borrowers[i].properties[0].country;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].country";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see AddressCountries values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgagePaymentFrequency')) {
            var borrower_propertyMortgagePaymentFrequency = 'borrower'+i.toString()+'_propertyMortgagePaymentFrequency';
          if (isString(bundle.inputData[borrower_propertyMortgagePaymentFrequency]))
          {
            bundle.inputData[borrower_propertyMortgagePaymentFrequency] = mortgagePaymentFrequencyStringToNum(bundle.inputData[borrower_propertyMortgagePaymentFrequency]);
            options.body.borrowers[i].properties[0].mortgages[0].paymentFrequency = bundle.inputData[borrower_propertyMortgagePaymentFrequency];
          }
          if (!(bundle.inputData[borrower_propertyMortgagePaymentFrequency] >= 1 && bundle.inputData[borrower_propertyMortgagePaymentFrequency] <= 6)) {
              delete options.body.borrowers[i].properties[0].mortgages[0].paymentFrequency;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].mortgages[0].paymentFrequency";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgagePaymentFrequency values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
          }
          
        }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgagePayoffType')) {
            var borrower_propertyMortgagePayoffType = 'borrower'+i.toString()+'_propertyMortgagePayoffType';
          if (isString(bundle.inputData[borrower_propertyMortgagePayoffType]))
          {
            bundle.inputData[borrower_propertyMortgagePayoffType] = mortgagePaymentFrequencyStringToNum(bundle.inputData[borrower_propertyMortgagePayoffType]);
            options.body.borrowers[i].properties[0].mortgages[0].paymentFrequency = bundle.inputData[borrower_propertyMortgagePayoffType];
          }
            if (!(bundle.inputData[borrower_propertyMortgagePayoffType] >= 1 && bundle.inputData[borrower_propertyMortgagePayoffType] <= 2)) {
              delete options.body.borrowers[i].properties[0].mortgages[0].payoffType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].mortgages[0].payoffType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgagePayOffTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageRateType')) {
            var borrower_propertyMortgageRateType = 'borrower'+i.toString()+'_propertyMortgageRateType';
          if (isString(bundle.inputData[borrower_propertyMortgageRateType]))
          {
            bundle.inputData[borrower_propertyMortgageRateType] = mortgageRateTypesStringToNum(bundle.inputData[borrower_propertyMortgageRateType]);
            options.body.borrowers[i].properties[0].mortgages[0].rateType = bundle.inputData[borrower_propertyMortgageRateType];
          }
            if (!(bundle.inputData[borrower_propertyMortgageRateType] >= 1 && bundle.inputData[borrower_propertyMortgageRateType] <= 5)) {
              delete options.body.borrowers[i].properties[0].mortgages[0].rateType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].mortgages[0].rateType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageRateTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageTermType')) {
            var borrower_propertyMortgageTermType = 'borrower'+i.toString()+'_propertyMortgageTermType';
          if (isString(bundle.inputData[borrower_propertyMortgageTermType]))
          {
            bundle.inputData[borrower_propertyMortgageTermType] = mortgageTermTypesStringToNum(bundle.inputData[borrower_propertyMortgageTermType]);
            options.body.borrowers[i].properties[0].mortgages[0].termType = bundle.inputData[borrower_propertyMortgageTermType];
          }
            if (!(bundle.inputData[borrower_propertyMortgageTermType] >= 1 && bundle.inputData[borrower_propertyMortgageTermType] <= 3)) {
              delete options.body.borrowers[i].properties[0].mortgages[0].termType;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].mortgages[0].termType";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageTermTypes values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }
      
        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageInsurer')) {
            var borrower_propertyMortgageInsurer = 'borrower'+i.toString()+'_propertyMortgageInsurer';
          if (isString(bundle.inputData[borrower_propertyMortgageInsurer]))
          {
            bundle.inputData[borrower_propertyMortgageInsurer] = insurerStringToNum(bundle.inputData[borrower_propertyMortgageInsurer]);
            options.body.borrowers[i].properties[0].mortgages[0].insurer = bundle.inputData[borrower_propertyMortgageInsurer];
          }
            if (!(bundle.inputData[borrower_propertyMortgageInsurer] >= 1 && bundle.inputData[borrower_propertyMortgageInsurer] <= 3)) {
              delete options.body.borrowers[i].properties[0].mortgages[0].insurer;
              let obj_field_error = {};
              obj_field_error.field_name = "borrowers["+i+"].properties[0].mortgages[0].insurer";
              obj_field_error.error_message = "Invalid value. Ignoring field. For correct values please see PropertyMortgageInsurers values at: https://newton.ca/developers/velocity-api/#enumerations";
                  
              arr_bad_input_fields.push(obj_field_error);
            }
          
        }

        if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_full_street_address')) {
        var borrower_full_street_address = 'borrower'+i.toString()+'_full_street_address';
          var addressObject = addressParse(bundle.inputData[borrower_full_street_address]);
          options.body.borrowers[0].addresses[0].unitNumber = addressObject.unitNumber;
          options.body.borrowers[0].addresses[0].streetName = addressObject.streetName;
          options.body.borrowers[0].addresses[0].streetType = addressObject.streetType;
          options.body.borrowers[0].addresses[0].streetNumber = addressObject.streetNumber;
          options.body.borrowers[0].addresses[0].city = addressObject.city;
          //options.body.borrowers[0].addresses[0].state = addressObject.state;
          //options.body.borrowers[0].addresses[0].zipcode = addressObject.zipcode;
      }
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_employmentHistory_street_address')) {
          var borrower_employmentHistory_street_address = 'borrower'+i.toString()+'_employmentHistory_street_address';
          var addressObject = addressParse(bundle.inputData[borrower_employmentHistory_street_address]);
          options.body.borrowers[0].employmentHistory[0].unitNumber = addressObject.unitNumber;
          options.body.borrowers[0].employmentHistory[0].streetName = addressObject.streetName;
          options.body.borrowers[0].employmentHistory[0].streetType = addressObject.streetType;
          options.body.borrowers[0].employmentHistory[0].streetNumber = addressObject.streetNumber;
          options.body.borrowers[0].employmentHistory[0].city = addressObject.city;
          //options.body.borrowers[0].employmentHistory[0].state = addressObject.state;
          //options.body.borrowers[0].employmentHistory[0].zipcode = addressObject.zipcode;
          
      }
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_properties_street_address')) {
          var borrower_properties_street_address = 'borrower'+i.toString()+'_properties_street_address';
          var addressObject = addressParse(bundle.inputData[borrower_properties_street_address]);
          options.body.borrowers[0].properties[0].unitNumber = addressObject.unitNumber;
          options.body.borrowers[0].properties[0].streetName = addressObject.streetName;
          options.body.borrowers[0].properties[0].streetType = addressObject.streetType;
          options.body.borrowers[0].properties[0].streetNumber = addressObject.streetNumber;
          options.body.borrowers[0].properties[0].city = addressObject.city;
          //options.body.borrowers[0].properties[0].zipcode = addressObject.zipcode;
          //options.body.borrowers[0].properties[0].state = addressObject.state;
      }
      if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_firstName')) {
        var borrower_firstName = 'borrower'+i.toString()+'_firstName';
        options.body.borrowers[0].firstName = bundle.inputData[borrower_firstName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_middleName')) {
        var borrower_middleName = 'borrower'+i.toString()+'_middleName';
        options.body.borrowers[0].middleName = bundle.inputData[borrower_middleName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_lastName')) {
        var borrower_lastName = 'borrower'+i.toString()+'_lastName';
        options.body.borrowers[0].lastName = bundle.inputData[borrower_lastName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_caslOptIn')) {
        var borrower_caslOptIn = 'borrower'+i.toString()+'_caslOptIn';
        options.body.borrowers[0].caslOptIn = bundle.inputData[borrower_caslOptIn]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_socialInsuranceNumber')) {
        var borrower_socialInsuranceNumber = 'borrower'+i.toString()+'_socialInsuranceNumber';
        options.body.borrowers[0].socialInsuranceNumber = bundle.inputData[borrower_socialInsuranceNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_firstTimeBuyer')) {
        var borrower_firstTimeBuyer = 'borrower'+i.toString()+'_firstTimeBuyer';
        options.body.borrowers[0].firstTimeBuyer = bundle.inputData[borrower_firstTimeBuyer]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_numOfDependents')) {
        var borrower_numOfDependents = 'borrower'+i.toString()+'_numOfDependents';
        options.body.borrowers[0].numOfDependents = bundle.inputData[borrower_numOfDependents]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressUnitNumber')) {
        var borrower_AddressUnitNumber = 'borrower'+i.toString()+'_AddressUnitNumber';
        options.body.borrowers[0].addresses[0].unitNumber = bundle.inputData[borrower_AddressUnitNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressStreetNumber')) {
        var borrower_AddressStreetNumber = 'borrower'+i.toString()+'_AddressStreetNumber';
        options.body.borrowers[0].addresses[0].streetNumber = bundle.inputData[borrower_AddressStreetNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressStreetName')) {
        var borrower_AddressStreetName = 'borrower'+i.toString()+'_AddressStreetName';
        options.body.borrowers[0].addresses[0].streetName = bundle.inputData[borrower_AddressStreetName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressCity')) {
        var borrower_AddressCity = 'borrower'+i.toString()+'_AddressCity';
        options.body.borrowers[0].addresses[0].city = bundle.inputData[borrower_AddressCity]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressProvinceOrState')) {
        var borrower_AddressProvinceOrState = 'borrower'+i.toString()+'_AddressProvinceOrState';
        options.body.borrowers[0].addresses[0].provinceOrState = bundle.inputData[borrower_AddressProvinceOrState]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_yearsAtAddress')) {
        var borrower_yearsAtAddress = 'borrower'+i.toString()+'_yearsAtAddress';
        options.body.borrowers[0].addresses[0].yearsAtAddress = bundle.inputData[borrower_yearsAtAddress]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_monthsAtAddress')) {
        var borrower_monthsAtAddress = 'borrower'+i.toString()+'_monthsAtAddress';
        options.body.borrowers[0].addresses[0].monthsAtAddress = bundle.inputData[borrower_monthsAtAddress]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_dwellingStatus')) {
        var borrower_dwellingStatus = 'borrower'+i.toString()+'_dwellingStatus';
        options.body.borrowers[0].addresses[0].dwellingStatus = bundle.inputData[borrower_dwellingStatus]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AddressrentalPayment')) {
        var borrower_AddressrentalPayment = 'borrower'+i.toString()+'_AddressrentalPayment';
        options.body.borrowers[0].addresses[0].rentalPayment = bundle.inputData[borrower_AddressrentalPayment]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_isCurrent')) {
        var borrower_isCurrent = 'borrower'+i.toString()+'_isCurrent';
        options.body.borrowers[0].employmentHistory[0].isCurrent = bundle.inputData[borrower_isCurrent]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentCompanyName')) {
        var borrower_EmploymentCompanyName = 'borrower'+i.toString()+'_EmploymentCompanyName';
        options.body.borrowers[0].employmentHistory[0].companyName = bundle.inputData[borrower_EmploymentCompanyName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentCompanyType')) {
        var borrower_EmploymentCompanyType = 'borrower'+i.toString()+'_EmploymentCompanyType';
        options.body.borrowers[0].employmentHistory[0].companyType = bundle.inputData[borrower_EmploymentCompanyType]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentOperatingAs')) {
        var borrower_EmploymentOperatingAs = 'borrower'+i.toString()+'_EmploymentOperatingAs';
        options.body.borrowers[0].employmentHistory[0].operatingAs = bundle.inputData[borrower_EmploymentOperatingAs]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentGrossRevenue')) {
        var borrower_EmploymentGrossRevenue = 'borrower'+i.toString()+'_EmploymentGrossRevenue';
        options.body.borrowers[0].employmentHistory[0].grossRevenue = bundle.inputData[borrower_EmploymentGrossRevenue]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentJobTitle')) {
        var borrower_EmploymentJobTitle = 'borrower'+i.toString()+'_EmploymentJobTitle';
        options.body.borrowers[0].employmentHistory[0].jobTitle = bundle.inputData[borrower_EmploymentJobTitle]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentYearsAt')) {
        var borrower_EmploymentYearsAt = 'borrower'+i.toString()+'_EmploymentYearsAt';
        options.body.borrowers[0].employmentHistory[0].yearsAt = bundle.inputData[borrower_EmploymentYearsAt]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_MonthsAtEmployment')) {
        var borrower_MonthsAtEmployment = 'borrower'+i.toString()+'_MonthsAtEmployment';
        options.body.borrowers[0].employmentHistory[0].monthsAt = bundle.inputData[borrower_MonthsAtEmployment]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentIncome')) {
        var borrower_EmploymentIncome = 'borrower'+i.toString()+'_EmploymentIncome';
        options.body.borrowers[0].employmentHistory[0].income = bundle.inputData[borrower_EmploymentIncome]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentYearsInIndustry')) {
        var borrower_EmploymentYearsInIndustry = 'borrower'+i.toString()+'_EmploymentYearsInIndustry';
        options.body.borrowers[0].employmentHistory[0].yearsInIndustry = bundle.inputData[borrower_EmploymentYearsInIndustry]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentMonthsInIndustry')) {
        var borrower_EmploymentMonthsInIndustry = 'borrower'+i.toString()+'_EmploymentMonthsInIndustry';
        options.body.borrowers[0].employmentHistory[0].monthsInIndustry = bundle.inputData[borrower_EmploymentMonthsInIndustry]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentPhoneNumber')) {
        var borrower_EmploymentPhoneNumber = 'borrower'+i.toString()+'_EmploymentPhoneNumber';
        options.body.borrowers[0].employmentHistory[0].phoneNumber = bundle.inputData[borrower_EmploymentPhoneNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_UnitEmploymentUnitNumber')) {
        var borrower_UnitEmploymentUnitNumber = 'borrower'+i.toString()+'_UnitEmploymentUnitNumber';
        options.body.borrowers[0].employmentHistory[0].unitNumber = bundle.inputData[borrower_UnitEmploymentUnitNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentStreetNumber')) {
        var borrower_EmploymentStreetNumber = 'borrower'+i.toString()+'_EmploymentStreetNumber';
        options.body.borrowers[0].employmentHistory[0].streetNumber = bundle.inputData[borrower_EmploymentStreetNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentStreetName')) {
        var borrower_EmploymentStreetName = 'borrower'+i.toString()+'_EmploymentStreetName';
        options.body.borrowers[0].employmentHistory[0].streetName = bundle.inputData[borrower_EmploymentStreetName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentCity')) {
        var borrower_EmploymentCity = 'borrower'+i.toString()+'_EmploymentCity';
        options.body.borrowers[0].employmentHistory[0].city = bundle.inputData[borrower_EmploymentCity]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_EmploymentProvinceOrState')) {
        var borrower_EmploymentProvinceOrState = 'borrower'+i.toString()+'_EmploymentProvinceOrState';
        options.body.borrowers[0].employmentHistory[0].provinceOrState = bundle.inputData[borrower_EmploymentProvinceOrState]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_OtherIncomeAmount')) {
        var borrower_OtherIncomeAmount = 'borrower'+i.toString()+'_OtherIncomeAmount';
        options.body.borrowers[0].otherIncomes[0].amount = bundle.inputData[borrower_OtherIncomeAmount]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_OtherIncomeDescription')) {
        var borrower_OtherIncomeDescription = 'borrower'+i.toString()+'_OtherIncomeDescription';
        options.body.borrowers[0].otherIncomes[0].description = bundle.inputData[borrower_OtherIncomeDescription]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AssetValue')) {
        var borrower_AssetValue = 'borrower'+i.toString()+'_AssetValue';
        options.body.borrowers[0].assets[0].value = bundle.inputData[borrower_AssetValue]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AssetDescription')) {
        var borrower_AssetDescription = 'borrower'+i.toString()+'_AssetDescription';
        options.body.borrowers[0].assets[0].description = bundle.inputData[borrower_AssetDescription]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_AssetDownPaymentAmount')) {
        var borrower_AssetDownPaymentAmount = 'borrower'+i.toString()+'_AssetDownPaymentAmount';
        options.body.borrowers[0].assets[0].downPaymentAmount = bundle.inputData[borrower_AssetDownPaymentAmount]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyValue')) {
        var borrower_PropertyValue = 'borrower'+i.toString()+'_PropertyValue';
        options.body.borrowers[0].properties[0].value = bundle.inputData[borrower_PropertyValue]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyOriginalPurchaseDate')) {
        var borrower_PropertyOriginalPurchaseDate = 'borrower'+i.toString()+'_PropertyOriginalPurchaseDate';
        options.body.borrowers[0].properties[0].originalPurchaseDate = bundle.inputData[borrower_PropertyOriginalPurchaseDate]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyOriginalPrice')) {
        var borrower_PropertyOriginalPrice = 'borrower'+i.toString()+'_PropertyOriginalPrice';
        options.body.borrowers[0].properties[0].originalPrice = bundle.inputData[borrower_PropertyOriginalPrice]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyAnnualTaxes')) {
        var borrower_PropertyAnnualTaxes = 'borrower'+i.toString()+'_PropertyAnnualTaxes';
        options.body.borrowers[0].properties[0].annualTaxes = bundle.inputData[borrower_PropertyAnnualTaxes]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyCondoFees')) {
        var borrower_PropertyCondoFees = 'borrower'+i.toString()+'_PropertyCondoFees';
        options.body.borrowers[0].properties[0].condoFees = bundle.inputData[borrower_PropertyCondoFees]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyIncludesHeat')) {
        var borrower_PropertyIncludesHeat = 'borrower'+i.toString()+'_PropertyIncludesHeat';
        options.body.borrowers[0].properties[0].includesHeat = bundle.inputData[borrower_PropertyIncludesHeat]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyHeatingFee')) {
        var borrower_PropertyHeatingFee = 'borrower'+i.toString()+'_PropertyHeatingFee';
        options.body.borrowers[0].properties[0].heatingFee = bundle.inputData[borrower_PropertyHeatingFee]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyEquity')) {
        var borrower_PropertyEquity = 'borrower'+i.toString()+'_PropertyEquity';
        options.body.borrowers[0].properties[0].propertyEquity = bundle.inputData[borrower_PropertyEquity]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyRentalIncome')) {
        var borrower_PropertyRentalIncome = 'borrower'+i.toString()+'_PropertyRentalIncome';
        options.body.borrowers[0].properties[0].rentalDetails[0].income = bundle.inputData[borrower_PropertyRentalIncome]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyRentalHydroExpense')) {
        var borrower_PropertyRentalHydroExpense = 'borrower'+i.toString()+'_PropertyRentalHydroExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].hydroExpense = bundle.inputData[borrower_PropertyRentalHydroExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyRentalManagementExpense')) {
        var borrower_PropertyRentalManagementExpense = 'borrower'+i.toString()+'_PropertyRentalManagementExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].managementExpense = bundle.inputData[borrower_PropertyRentalManagementExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyInsuranceExpense')) {
        var borrower_PropertyInsuranceExpense = 'borrower'+i.toString()+'_PropertyInsuranceExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].insuranceExpense = bundle.inputData[borrower_PropertyInsuranceExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyRepairsExpense')) {
        var borrower_PropertyRepairsExpense = 'borrower'+i.toString()+'_PropertyRepairsExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].repairsExpense = bundle.inputData[borrower_PropertyRepairsExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyInterestExpense')) {
        var borrower_PropertyInterestExpense = 'borrower'+i.toString()+'_PropertyInterestExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].interestExpense = bundle.inputData[borrower_PropertyInterestExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyOtherExpense')) {
        var borrower_PropertyOtherExpense = 'borrower'+i.toString()+'_PropertyOtherExpense';
        options.body.borrowers[0].properties[0].rentalDetails[0].otherExpense = bundle.inputData[borrower_PropertyOtherExpense]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyUnitNumber')) {
        var borrower_PropertyUnitNumber = 'borrower'+i.toString()+'_PropertyUnitNumber';
        options.body.borrowers[0].properties[0].unitNumber = bundle.inputData[borrower_PropertyUnitNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyStreetNumber')) {
        var borrower_PropertyStreetNumber = 'borrower'+i.toString()+'_PropertyStreetNumber';
        options.body.borrowers[0].properties[0].streetNumber = bundle.inputData[borrower_PropertyStreetNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyStreetName')) {
        var borrower_PropertyStreetName = 'borrower'+i.toString()+'_PropertyStreetName';
        options.body.borrowers[0].properties[0].streetName = bundle.inputData[borrower_PropertyStreetName]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyCity')) {
        var borrower_PropertyCity = 'borrower'+i.toString()+'_PropertyCity';
        options.body.borrowers[0].properties[0].city = bundle.inputData[borrower_PropertyCity]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_PropertyProvinceOrState')) {
        var borrower_PropertyProvinceOrState = 'borrower'+i.toString()+'_PropertyProvinceOrState';
        options.body.borrowers[0].properties[0].provinceOrState = bundle.inputData[borrower_PropertyProvinceOrState]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageBalance')) {
        var borrower_propertyMortgageBalance = 'borrower'+i.toString()+'_propertyMortgageBalance';
        options.body.borrowers[0].properties[0].mortgages[0].balance = bundle.inputData[borrower_propertyMortgageBalance]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageMaturityDate')) {
        var borrower_propertyMortgageMaturityDate = 'borrower'+i.toString()+'_propertyMortgageMaturityDate';
        options.body.borrowers[0].properties[0].mortgages[0].maturityDate = bundle.inputData[borrower_propertyMortgageMaturityDate]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgagePayment')) {
        var borrower_propertyMortgagePayment = 'borrower'+i.toString()+'_propertyMortgagePayment';
        options.body.borrowers[0].properties[0].mortgages[0].payment = bundle.inputData[borrower_propertyMortgagePayment]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageLender')) {
        var borrower_propertyMortgageLender = 'borrower'+i.toString()+'_propertyMortgageLender';
        options.body.borrowers[0].properties[0].mortgages[0].lender = bundle.inputData[borrower_propertyMortgageLender]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageInterestRate')) {
        var borrower_propertyMortgageInterestRate = 'borrower'+i.toString()+'_propertyMortgageInterestRate';
        options.body.borrowers[0].properties[0].mortgages[0].interestRate = bundle.inputData[borrower_propertyMortgageInterestRate]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageBlendedAmortization')) {
        var borrower_propertyMortgageBlendedAmortization = 'borrower'+i.toString()+'_propertyMortgageBlendedAmortization';
        options.body.borrowers[0].properties[0].mortgages[0].blendedAmortization = bundle.inputData[borrower_propertyMortgageBlendedAmortization]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageNumber')) {
        var borrower_propertyMortgageNumber = 'borrower'+i.toString()+'_propertyMortgageNumber';
        options.body.borrowers[0].properties[0].mortgages[0].mortgageNumber = bundle.inputData[borrower_propertyMortgageNumber]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageInsured')) {
        var borrower_propertyMortgageInsured = 'borrower'+i.toString()+'_propertyMortgageInsured';
        options.body.borrowers[0].properties[0].mortgages[0].insured = bundle.inputData[borrower_propertyMortgageInsured]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyMortgageInsuranceAccount')) {
        var borrower_propertyMortgageInsuranceAccount = 'borrower'+i.toString()+'_propertyMortgageInsuranceAccount';
        options.body.borrowers[0].properties[0].mortgages[0].insuranceAccount = bundle.inputData[borrower_propertyMortgageInsuranceAccount]
    }
    if (bundle.inputData.hasOwnProperty('borrower'+i.toString()+'_propertyOriginalPurchaseAmount')) {
        var borrower_propertyOriginalPurchaseAmount = 'borrower'+i.toString()+'_propertyOriginalPurchaseAmount';
        options.body.borrowers[0].properties[0].mortgages[0].originalPurchaseAmount = bundle.inputData[borrower_propertyOriginalPurchaseAmount]
    }
    }
  
return z.request(options)
  .then((response) => {
    let velocity_api_error = {};
    let new_response = {};
    if (response.status == 400) {
      velocity_api_error = JSON.parse(response.content);
      arr_field_errors = velocity_api_error.errors;
      //console.log(response.content);
      //response.throwForStatus();
      if (arr_field_errors['SubjectProperty.StreetType']) {
        delete options.body.subjectProperty.streetType;
        //response.throwForStatus();
      }
      if (arr_field_errors['SubjectProperty.StreetDirection']) {
        delete options.body.subjectProperty.streetDirection;
        //response.throwForStatus();
      }
      if (arr_field_errors['closingDate']) {
        delete options.body.closingDate;
        //response.throwForStatus();
      }
      if (arr_field_errors['subjectProperty.province']) {
        delete options.body.subjectProperty.province;
        //response.throwForStatus();
      }
      if (arr_field_errors['subjectProperty.intendedUse']) {
        delete options.body.subjectProperty.intendedUse;
        //response.throwForStatus();
      }
      if (arr_field_errors['mortgageRequest.purpose']) {
        delete options.body.mortgageRequest.purpose;
        //response.throwForStatus();
      }
      for (let index = 0; index < 10; index++) {
        if (arr_field_errors['borrowers[index].email']) {
            delete options.body.borrowers[index].email;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].salutation']) {
            delete options.body.borrowers[index].salutation;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].suffix']) {
            delete options.body.borrowers[index].suffix;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].contactPreference']) {
            delete options.body.borrowers[index].contactPreference;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].maritalStatus']) {
            delete options.body.borrowers[index].maritalStatus;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].residentType']) {
            delete options.body.borrowers[index].residentType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].correspondenceLanguage']) {
            delete options.body.borrowers[index].correspondenceLanguage;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].homePhone']) {
            delete options.body.borrowers[index].homePhone;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].cellPhone']) {
            delete options.body.borrowers[index].cellPhone;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].businessPhone']) {
            delete options.body.borrowers[index].businessPhone;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].dateofBirth']) {
            delete options.body.borrowers[index].dateofBirth;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].addresses[0].streetType']) {
            delete options.body.borrowers[index].addresses[0].streetType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].addresses[0].streetDirection']) {
            delete options.body.borrowers[index].addresses[0].streetDirection;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].addresses[0].country']) {
            delete options.body.borrowers[index].addresses[0].country;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].jobType']) {
            delete options.body.borrowers[index].employmentHistory[0].jobType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].employmentType']) {
            delete options.body.borrowers[index].employmentHistory[0].employmentType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].industrySector']) {
            delete options.body.borrowers[index].employmentHistory[0].industrySector;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].incomeType']) {
            delete options.body.borrowers[index].employmentHistory[0].incomeType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].incomePeriod']) {
            delete options.body.borrowers[index].employmentHistory[0].incomePeriod;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].streetDirection']) {
            delete options.body.borrowers[index].employmentHistory[0].streetDirection;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].streetType']) {
            delete options.body.borrowers[index].employmentHistory[0].streetType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].employmentHistory[0].country']) {
            delete options.body.borrowers[index].employmentHistory[0].country;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].otherIncomes[0].type']) {
            delete options.body.borrowers[index].otherIncomes[0].type;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].otherIncomes[0].incomePeriod']) {
            delete options.body.borrowers[index].otherIncomes[0].incomePeriod;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].assets[0].type']) {
            delete options.body.borrowers[index].assets[0].type;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].occupancy']) {
            delete options.body.borrowers[index].properties[0].occupancy;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].futureStatus']) {
            delete options.body.borrowers[index].properties[0].futureStatus;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].country']) {
            delete options.body.borrowers[index].properties[0].country;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].mortgages[0].paymentFrequency']) {
            delete options.body.borrowers[index].properties[0].mortgages[0].paymentFrequency;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].mortgages[0].payoffType']) {
            delete options.body.borrowers[index].properties[0].mortgages[0].payoffType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].mortgages[0].rateType']) {
            delete options.body.borrowers[index].properties[0].mortgages[0].rateType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].mortgages[0].termType']) {
            delete options.body.borrowers[index].properties[0].mortgages[0].termType;
        //response.throwForStatus();
        }
        if (arr_field_errors['borrowers[index].properties[0].mortgages[0].insurer']) {
            delete options.body.borrowers[index].properties[0].mortgages[0].insurer;
        //response.throwForStatus();
        }
    }
      if (arr_field_errors['referral.type']) {
        delete options.body.referral.type;
        //response.throwForStatus();
      }
      new_response = z.request(options);
    }
    
    //console.log(response)
    //response.throwForStatus();
    const results = response.json;

    // // You can do any parsing you need for results here before returning them
    
    return {result:results}
    // return {success: true, arr_bad_input_fields: arr_bad_input_fields, original_input: bundle.inputData, velocity_new_response: new_response,velocity_input: options, velocity_api_error: velocity_api_error, arr_field_errors: arr_field_errors}
  });