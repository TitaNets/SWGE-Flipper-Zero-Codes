// TitaNets Galaxy's Edge Aztec Codes for Flipper Zero

let submenu = require("submenu");
let dialog = require("dialog");
let notify = require("notification");
let widget =require("widget");
let Aztec = load("/ext/apps/Scripts/Libs/aztec_api.js");

print("Loading codes...");
let menuItems = ["General", "Cargo", "Halcyon Cargo", "Outfit", "Parts & Scraps", "Ports Of Call", "Program", "Vehicle", "Weapon"];

let binaryArray = undefined;

function clearScreen() {
    // Print several new lines to effectively "clear" the console
    for (let i = 0; i < 20; i++) {
        print("\n");
    }
}
function showAboutMessage() {
	notify.error();
    dialog.custom({
        header: "TitaNets",
        text: "Visit titanets.com\nfor more solutions.",
        button_center: "Ok",
        auto_close: false
    });
}

// Function to convert a single hex character to a 4-bit binary string
function hexCharToBin(hexChar) {
    let binaryValues = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
        'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111'
    };
    hexChar = to_lower_case(hexChar); // Ensure hexChar is in lowercase
    return binaryValues[hexChar] || ''; // Return '' for invalid characters
}

// Function to convert a hexadecimal string to a binary string
function hexToBin(hex) {
    let binaryString = '';
    for (let i = 0; i < hex.length; i++) {
		doNotify(i);
        let hexChar = hex[i];
        binaryString += hexCharToBin(hexChar);
    }
    return binaryString;
}

function customReplace(str, search, replacement) {
    let index = str.indexOf(search);
    if (index === -1) {
        return str; // If the search string is not found, return the original string
    }
    return str.slice(0, index) + replacement + str.slice(index + search.length);
}
function customSplit(str, delimiter) {
    let result = [];
    let current = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            result.push(current);
            current = "";
        } else {
            current += str[i];
        }
    }

    // Add the last part
    result.push(current);

    return result;
}

function getOptionName(option){
	return customReplace(option.name, "{code}", option.code);
}
// Check if binaryArray is not empty
function isCodeAvailable(){
	return binaryArray !== undefined;
}

function displayAztecCode(){
	if(isCodeAvailable()){
		notify.success();
		Aztec.drawAztecCode(0, 2, binaryArray, widget, notify);		
		binaryArray = undefined;
		return true;
	} 
	else return false;
}

function doNotify(id){
	if(id % 3 === 0) { notify.blink("blue", "short"); }
}
// Function to add an item to the menu
function addMenuItem(id, code, name, payload) {
	doNotify(id);	
	
    // Replace {code} in the name with the actual code
    let formattedName = customReplace(name, "{code}", code);

    // Create the item object
    let item = {
        id: id,
        code: code,
        name: formattedName,
        payload: payload
    };

    // Add the item to the menu array
    menu.push(item);
}

function mainMenu() {
	while (true) {
		let ix = 0;
		submenu.setHeader("Categories:");        
		for (let ix = 0; ix < menuItems.length; ix++) {
			doNotify(ix);
			submenu.addItem(menuItems[ix], ix);
		}
		
		let selectedId = submenu.show();
		
		if (selectedId === undefined) {
			break; // Exit the loop if the back button is pressed
		} else {
			clearScreen();
			print("Loading options...");
		
			let menu = [];
			let selectedText = menuItems[selectedId];			

			if(selectedText === "General") {
				addMenuItem(0, "AB_PQ", "Reward [{code}]", "17305315C139FFC3019AFA3D154AAAD45CEFA34066FFF8DE12055522");
				addMenuItem(1, "AB_ST", "Reward [{code}]", "1A5436A9C129FFD301BAFA3D15CAABD458EFA3407EFFF8DE53F89831");
				addMenuItem(2, "AB_UV", "Reward [{code}]", "01986605C139FFF301FAFAFD144AAAD45CEFA7406EFFE8DE57B7D971");
				addMenuItem(3, "IJ_NO", "Reward [{code}]", "365CC699C131FFFB01DAFABD144AA9D45EEFA34076FFC8DE1E7A0C0B");
				addMenuItem(4, "IJ_ST", "Reward [{code}]", "2A0CC679C139FFEB01DAFAFD154AAAD45AEFAB4066FFC8DE139F5839");
				addMenuItem(5, "JK_OP", "Reward [{code}]", "2CBCE939C13DFFDF01E2FABD144AABD458EFA7407EFFD8DE32C0D0CB");
				addMenuItem(6, "JK_QR", "Reward [{code}]", "3770B995C12DFFFF01A2FA7D15CAAAD45CEFA3406EFFC8DE368F918B");
				addMenuItem(7, "JK_RS", "Reward [{code}]", "384A8739C13DFFDF01C2FA7D154AAAD45CEFA74066FFE8DE774B9496");
				addMenuItem(8, "JK_ST", "Reward [{code}]", "20FAB3D1C135FFCF01A2FAFD15CAA8D45EEFA74076FFD8DE7381D854");
				addMenuItem(9, "KL_NO", "Reward [{code}]", "2E1A97AEC121FFDF018AFA7D14CAA8D45CEFA74066FFD8DE7E450C68");
				addMenuItem(10, "KL_OP", "Reward [{code}]", "3E0CCDA6C121FFDF01CAFA7D144AA8D45EEFAF407EFFD8DE32E150C5");
				addMenuItem(11, "KL_PQ", "Reward [{code}]", "3F2EF2F2C139FFDF01AAFA3D154AAAD45CEFAF406EFFD8DE325D9549");
				addMenuItem(12, "KL_ST", "Reward [{code}]", "324A974EC129FFCF018AFA3D15CAABD458EFAF4076FFD8DE73A0585A");
				addMenuItem(13, "KL_TU", "Reward [{code}]", "3368A81AC131FFCF01EAFA7D14CAA9D45AEFAF4066FFD8DE731C9DD6");
				addMenuItem(14, "KL_UV", "Reward [{code}]", "2986C7E2C139FFEF01CAFAFD144AAAD45CEFAB4066FFC8DE77EF191A");
			}
			else if(selectedText === "Cargo") {
				addMenuItem(0, "FAL22", "A99 Aquata Breather", "0DEA44F7C13DFFC10172FBDD14CAADD455AFAE4042FFE0EE3514084E");
				addMenuItem(1, "FAL23", "Neuro-Saav TE4.4 Field Quadnoculars", "21AE64CFC12DFFD10132FB5D14CAAED455AFA24052FFE0EE1DFC0C5B");
				addMenuItem(2, "FAL24", "Spice", "3DE42093C135FFC10152FB9D14CAAFD451AFAA4052FFE0EE3593189A");
				addMenuItem(3, "FAL26", "Plush Toys", "275C47DFC135FFF10172FB1D154AAED457AFA6404AFFC0EE246BE9CA");
				addMenuItem(4, "FAL29", "Medical Equipment Bags", "3B160383C12DFFE10112FBDD154AAFD453AFAE404AFFC0EE0C04FD0B");
				addMenuItem(5, "FAL30", "Loth-cat Chow", "0FC27EEBC135FFE10132FBDD15CAACD453AFA24052FFE4EE07399E3E");
				addMenuItem(6, "FG_NO", "Food Ration Packs", "345E10FBC13DFFDB01E2FA7D14CAAAD45AEFAB4066FFF8DE1E144CB1");
				addMenuItem(7, "FG_OP", "Salvage Cleaning Kit", "24484AF3C13DFFDB01A2FA7D144AAAD458EFA3407EFFF8DE52B0101C");
				addMenuItem(8, "FG_PQ", "Sewing Thread", "256A75A7C125FFDB01C2FA3D154AA8D45AEFA3406EFFF8DE520CD590");
				addMenuItem(9, "FG_QR", "Condiments", "3F841A5FC12DFFFB01E2FABD15CAABD45CEFA7406EFFE8DE56FF515C");
				addMenuItem(10, "FG_TU", "Gaming Kit", "292C2F4FC12DFFCB0182FA7D14CAABD45CEFA34066FFF8DE134DDD0F");
				addMenuItem(11, "FG_UV", "Neuro-Saav TE4.4 Field Quadnoculars", "33C240B7C125FFEB01A2FAFD144AA8D45AEFA74066FFE8DE17BE59C3");
				addMenuItem(12, "GI_LM", "A99 Aquata Breather", "3CDCA400C129FFEB01F2FA7D14CAABD45CEFAF4076FFC8DE59538F1C");
				addMenuItem(13, "GI_MN", "Spice", "2632CBF8C121FFCB01D2FAFD144AA8D45AEFAB4076FFD8DE5DA00BD0");
				addMenuItem(14, "GI_NO", "Loth-cat Chow", "2A6A92B0C131FFCB0192FA7D15CAABD45AEFA3406EFFF8DE7E214C19");
				addMenuItem(15, "GI_OP", "Medical Equipment Bags", "3A7CC8B8C131FFCB01D2FA7D154AABD458EFAB4076FFF8DE328510B4");
				addMenuItem(16, "GI_QR", "Plush Toys", "21B09814C121FFEB0192FABD14CAAAD45CEFAF4066FFE8DE36CA51F4");
				addMenuItem(17, "IJ_TU", "Neuro-Saav TE4.4 Field Quadnoculars", "2B2EF92DC121FFEB01BAFABD144AA8D458EFAB4076FFC8DE13239DB5");
				addMenuItem(18, "IJ_UV", "Coded Communicator", "31C096D5C129FFCB019AFA3D14CAABD45EEFAF4076FFD8DE17D01979");
				addMenuItem(19, "JK_LM", "Medical Equipment Bags", "2A1C8581C125FFFF01C2FABD15CAABD45CEFA3407EFFE8DE59164F63");
				addMenuItem(20, "JK_MN", "Food Ration Packs", "30F2EA79C12DFFDF01E2FA3D154AA8D45AEFA7407EFFF8DE5DE5CBAF");
				addMenuItem(21, "JK_NO", "Tank Containing Bacta Fluid", "3CAAB331C13DFFDF01A2FABD14CAABD45AEFAF4066FFD8DE7E648C66");
			}
			else if(selectedText === "Halcyon Cargo") {
				addMenuItem(0, "CAST01", "Coaxium", "3D427BD6C131FFF301B2FAAD154AAB545AEFA14066FFFCDE4BB303D5");
				addMenuItem(1, "CAST05", "Datatapes", "3C9C5992C131FFF301D2FA2D154AAB545CEFAD407EFFECDE6B5787B3");
				addMenuItem(2, "CAST07", "Jedi Testing Viewscreen", "05EC1796C139FFC301B2FA2D154AA9545AEFAD4066FFCCDE2DF3037E");
				addMenuItem(3, "CAST08", "Lost Holocron", "068E7072C139FFE30192FAAD144AAA545AEFA14076FFCCDE4FB641AA");
				addMenuItem(4, "CAST09", "Training Remote", "2672366AC139FFD301F2FAAD15CAA8545AEFA9407EFFFCDE6FA4037F");
				addMenuItem(5, "CAST12", "Decoy Stone", "28926D9EC121FFE30192FA6D144AAA545AEFA9406EFFECDE49CE8DA1");
				addMenuItem(6, "CAST15", "First Order Transmitter", "3EC20282C131FFC30192FA2D154AAA5458EFA9406EFFCCDE6B6E4FBD");
				addMenuItem(7, "CAST17", "All-Kit", "07B24C86C139FFF301F2FA2D154AA8545EEFA94076FFECDE2DCACB70");
				addMenuItem(8, "JK_PQ", "Engineering Tools", "2D9ED66DC125FFDF0182FAFD154AA9D45AEFA7406EFFD8DE327C1547");
				addMenuItem(9, "JK_UV", "Tool Demagnetizer", "3B36E37DC125FFEF01E2FA3D144AA9D45AEFA34066FFC8DE77CE9914");
				addMenuItem(10, "KL_LM", "Jedi Crusader Necklace", "38ACA11EC139FFFF01EAFA7D15CAA8D45AEFAB407EFFE8DE5937CF6D");
				addMenuItem(11, "KL_QR", "Porg Toys", "25C09D0AC131FFFF018AFABD15CAA9D45AEFAB406EFFC8DE36AE1185");
				addMenuItem(12, "KL_RS", "All-Kit", "2AFAA3A6C121FFDF01EAFABD154AA9D45AEFAF4066FFE8DE776A1498");
			}
			else if(selectedText === "Outfit") {
				addMenuItem(0, "BC_LM", "Resistance Flight Uniform", "1A447551C135FFC701A2FA7D154AAAD45EEFAB4066FFD8DE19718F6B");
				addMenuItem(1, "BC_MN", "Resistance Ground Forces Outfit", "00AA1AA9C13DFFE70182FAFD15CAA9D458EFAF4066FFC8DE1D820BA7");
				addMenuItem(2, "BC_NO", "Stormtrooper Armor", "0CF243E1C12DFFE701C2FA7D144AAAD458EFA7407EFFE8DE3E034C6E");
				addMenuItem(3, "BC_OP", "Death Star Gunner Uniform", "1CE419E9C12DFFE70182FA7D14CAAAD45AEFAF4066FFE8DE72A710C3");
				addMenuItem(4, "BC_PQ", "Mon Calamari Outfit", "1DC626BDC135FFE701E2FA3D15CAA8D458EFAF4076FFE8DE721BD54F");
				addMenuItem(5, "BC_RS", "Batuu Rain Outfit", "081277E9C12DFFE701A2FABD15CAABD45EEFAF407EFFD8DE372C549E");
				addMenuItem(6, "BC_ST", "Ewok Disguise", "10A24301C125FFF701C2FA3D154AA9D45CEFAF406EFFE8DE33E6185C");
				addMenuItem(7, "BC_TU", "Batuu Sun Outfit", "11807C55C13DFFF701A2FA7D144AABD45EEFAF407EFFE8DE335ADDD0");
				addMenuItem(8, "CD_LM", "First Order Outfit", "08F451CEC129FFC7018AFABD154AA9D458EFA34066FFD8DE19500F65");
				addMenuItem(9, "CD_QR", "Marauder Armor", "15986DDAC121FFC701EAFA7D154AA8D458EFA34076FFF8DE76C9D18D");
				addMenuItem(10, "CD_RS", "Leather Armor", "1AA25376C131FFE7018AFA7D15CAA8D458EFA7407EFFD8DE370DD490");
				addMenuItem(11, "CD_ST", "Embo-style Outfit", "0212679EC139FFF701EAFAFD154AAAD45AEFA7406EFFE8DE33C79852");
				addMenuItem(12, "CD_TU", "Ohnaka Transport Solutions Uniform", "033058CAC121FFF7018AFABD144AA8D458EFA7407EFFE8DE337B5DDE");
				addMenuItem(13, "DE_OP", "Jawa Outfit", "3E0C0902C12DFFE701F2FAFD144AA8D45AEFA7406EFFF8DE32DC5020");
				addMenuItem(14, "FAL05", "Resistance Flight Uniform", "22083F93C12DFFF10132FB1D144AAFD457AFA24050FFF8EE1E3D1E49");
				addMenuItem(15, "FAL13", "Stormtrooper Armor", "120235A7C135FFF10172FB9D144AACD453AFAE4048FFFCEE3C478913");
				addMenuItem(16, "FAL28", "Jawa Outfit", "175223BBC13DFFF10152FB5D154AACD453AFA2405AFFC0EE24ECF91E");
				addMenuItem(17, "IJ_OP", "Batuu Sun Outfit", "264A9C91C131FFFB019AFABD14CAA9D45CEFAB406EFFC8DE52DE50A6");
			}
			else if(selectedText === "Parts & Scraps") {
				addMenuItem(0, "DE_LM", "RA-7 Personal Servant Droid Arm", "38AC65BAC135FFC701D2FAFD15CAA8D45EEFA3406EFFC8DE590ACF88");
				addMenuItem(1, "DE_MN", "Vaporator Blades", "22420A42C13DFFE701F2FA7D154AABD458EFA7406EFFD8DE5DF94B44");
				addMenuItem(2, "DE_NO", "AT-AT Targeting Computer", "2E1A530AC12DFFE701B2FAFD14CAA8D458EFAF4076FFF8DE7E780C8D");
				addMenuItem(3, "DE_PQ", "Kyber Crystals - Blue", "3F2E3656C135FFE70192FABD154AAAD458EFA7407EFFF8DE326095AC");
				addMenuItem(4, "DE_QR", "Kyber Crystals - Green", "25C059AEC13DFFC701B2FA3D15CAA9D45EEFA3407EFFE8DE36931160");
				addMenuItem(5, "DE_RS", "Kyber Crystals - Red", "2AFA6702C12DFFE701D2FA3D154AA9D45EEFA74076FFC8DE7757147D");
				addMenuItem(6, "DE_ST", "Kyber Crystals - Purple", "324A53EAC125FFF701B2FABD15CAABD45CEFA74066FFF8DE739D58BF");
				addMenuItem(7, "DE_TU", "DUM-series Pit droid, Class 2 Heads", "33686CBEC13DFFF701D2FAFD14CAA9D45EEFA74076FFF8DE73219D33");
				addMenuItem(8, "DE_UV", "Magnetic Field Condenser", "29860346C135FFD701F2FA7D144AAAD458EFA34076FFE8DE77D219FF");
				addMenuItem(9, "EF_LM", "Droid Holoprojector", "2860204BC131FFC701FAFAFD144AAAD45CEFA7407EFFF8DE59690F70");
				addMenuItem(10, "EF_MN", "Tracer Beacon", "328E4FB3C139FFE701DAFA7D14CAA9D45AEFA3407EFFE8DE5D9A8BBC");
				addMenuItem(11, "EF_NO", "Computer Probe Arm (R-unit)", "3ED616FBC129FFE7019AFAFD154AAAD45AEFAB4066FFC8DE7E1BCC75");
				addMenuItem(12, "EF_OP", "Carbon Chisel", "2EC04CF3C129FFE701DAFAFD15CAAAD458EFA3407EFFC8DE32BF90D8");
				addMenuItem(13, "EF_PQ", "Osteo Fragmenter", "2FE273A7C131FFE701BAFABD14CAA8D45AEFA3406EFFC8DE32035554");
				addMenuItem(14, "EF_QR", "Diatium Power Core", "350C1C5FC139FFC7019AFA3D144AABD45CEFA7406EFFD8DE36F0D198");
				addMenuItem(15, "EF_RS", "Hang Glider", "3A3622F3C129FFE701FAFA3D14CAABD45CEFA34066FFF8DE7734D485");
				addMenuItem(16, "EF_ST", "Security Enhanced Comlink", "2286161BC121FFF7019AFABD144AA9D45EEFA34076FFC8DE73FE9847");
				addMenuItem(17, "FAL03", "Kyber Crystals - Blue", "12065BF7C125FFF10112FB5D144AADD453AFA64040FFF8EE1EBA0E9D");
				addMenuItem(18, "FAL04", "Carbon Chisel", "0E4C1FABC13DFFE10172FB9D144AACD457AFAE4040FFF8EE36D51A5C");
				addMenuItem(19, "FAL09", "Osteo Fragmenter", "08BE3CBBC125FFC10132FBDD15CAACD455AFAA4058FFD8EE0F42FFCD");
				addMenuItem(20, "FAL10", "Kyber Crystals - Green", "3C6A41D3C13DFFC10112FBDD154AAFD455AFA64040FFFCEE047F9CF8");
				addMenuItem(21, "FAL11", "Diatium Power Core", "102E61EBC12DFFD10152FB5D154AACD455AFAA4050FFFCEE2C9798ED");
				addMenuItem(22, "FAL12", "Droid Holoprojector", "3E46159FC125FFE10132FB1D144AAFD453AFA24058FFFCEE14AF8D06");
				addMenuItem(23, "FAL14", "Computer Probe Arm (R-unit)", "0E4871FBC12DFFE10112FB5D144AADD457AFA64048FFFCEE14289DD2");
				addMenuItem(24, "FAL16", "DUM-series Pit droid, Class 2 Heads", "14F016B7C12DFFD10132FBDD15CAACD451AFAA4050FFDCEE05D06C82");
				addMenuItem(25, "FAL17", "Security Enhanced Comlink", "38B4368FC13DFFC10172FB5D15CAAFD451AFA64040FFDCEE2D386897");
				addMenuItem(26, "FAL18", "Data Chip", "24FE72D3C125FFD10112FB9D15CAAED455AFAE4040FFDCEE05577C56");
				addMenuItem(27, "FAL19", "Tracer Beacon", "08BA52EBC135FFC10152FB1D15CAADD455AFA24050FFDCEE2DBF7843");
				addMenuItem(28, "FAL20", "Magnetic Field Condenser", "0FC610BBC125FFE10152FB1D15CAADD453AFAA405AFFE0EE25C419B0");
				addMenuItem(29, "FAL25", "RA-7 Personal Servant Droid Arm", "11A000ABC125FFD10112FB1D14CAACD451AFA64042FFE0EE1D7B1C8F");
				addMenuItem(30, "FAL27", "AT-AT Targeting Computer", "0B1867E7C125FFE10132FB9D154AADD457AFAA405AFFC0EE0C83EDDF");
				addMenuItem(31, "FG_LM", "MSE-6 Series Mouse Droid Casing", "22E8264BC125FFFB0182FA7D15CAAAD45CEFA7407EFFC8DE39668FB4");
				addMenuItem(32, "FG_MN", "First Order Binders", "380649B3C12DFFDB01A2FAFD154AA9D45AEFA3407EFFD8DE3D950B78");
				addMenuItem(33, "FG_ST", "Data Chip", "280E101BC135FFCB01E2FA3D15CAA9D45EEFA34076FFF8DE13F11883");
				addMenuItem(34, "GI_PQ", "Star Destroyer Capacitor Bearing", "3B5EF7ECC129FFCB01B2FA3D144AA9D45AEFAB4066FFF8DE3239D538");
				addMenuItem(35, "IJ_MN", "Tracer Beacon", "3A049FD1C121FFFB019AFA3D15CAAAD45EEFAB406EFFE8DE3DFB4BC2");
			}
			else if(selectedText === "Ports Of Call") {
				addMenuItem(0, "CAST18", "Ports of Call Anomalies", "04D02B62C139FFD301D2FAAD144AAB545EEFA54066FFECDE4F8F89A4");
			}
			else if(selectedText === "Program") {
				addMenuItem(0, "CAST02", "Coaxium Coordinates", "2ACC368EC121FFD301D2FA6D144AAB545EEFAD407EFFCCDE49F745AF");
				addMenuItem(1, "CAST03", "Droid Unbolting Program", "0A307096C121FFE301B2FA6D15CAA9545EEFA54076FFFCDE69E5077A");
				addMenuItem(2, "CAST04", "Resistance Coordinates", "09521772C121FFC30192FAED14CAAA545EEFA94066FFFCDE0BA045AE");
				addMenuItem(3, "CAST06", "Autopilot Override Program", "2510518EC139FFF301D2FA2D14CAAB545AEFA5406EFFFCDE0DE141AB");
				addMenuItem(4, "CAST10", "First Order Credentials", "1FE066DEC131FFF30192FAAD14CAA8545EEFAD407EFFECDE6B98890E");
				addMenuItem(5, "CAST13", "Hayananeya Schematic", "086E2B86C121FFD301F2FA6D15CAA8545AEFA14066FFDCDE69DCCF74");
				addMenuItem(6, "CAST14", "Cargo Anomalies", "0B0C4C62C121FFF301D2FAED14CAAB545AEFAD4076FFDCDE0B998DA0");
				addMenuItem(7, "CAST16", "Personnel Anomalies", "274E0A9EC139FFC30192FA2D14CAAA545EEFA1407EFFDCDE0DD889A5");
				addMenuItem(8, "CAST19", "Ship Shutdown Data", "242C6D7AC139FFE301B2FAAD15CAA9545EEFAD406EFFDCDE6F9DCB71");
				addMenuItem(9, "CAST20", "Hyperspace Tracking Schematic", "1518532EC139FFD301F2FA2D14CAAB545AEFA14066FFFCDE23CF516F");
				addMenuItem(10, "JK_TU", "Hayananeya Data", "21D88C85C12DFFCF01C2FABD14CAAAD45CEFA74066FFD8DE733D1DD8");
			}
			else if(selectedText === "Vehicle") {
				addMenuItem(0, "CAST11", "Halcyon", "3F1C20C6C131FFC301F2FAAD154AAA545EEFA54076FFDCDE4B8ACBDB");
			}
			else if(selectedText === "Weapon") {
				addMenuItem(0, "AB_LM", "Imperial E-11 Blaster Rifle", "10B200F9C139FFE301DAFA7D15CAA8D45AEFA74076FFC8DE796F0F06");
				addMenuItem(1, "AB_MN", "Z-6 Jetpack", "0A5C6F01C131FFC301FAFAFD154AABD45CEFA34076FFD8DE7D9C8BCA");
				addMenuItem(2, "AB_NO", "Bowcaster", "06043649C121FFC301BAFA7D14CAA8D45CEFAB406EFFF8DE5E1DCC03");
				addMenuItem(3, "AB_OP", "7-PrG Proton Grenade", "16126C41C121FFC301FAFA7D144AA8D45EEFA34076FFF8DE12B990AE");
				addMenuItem(4, "AB_QR", "Concussion Disc", "0DDE3CEDC131FFE301BAFABD15CAA9D45AEFA74066FFE8DE16F6D1EE");
				addMenuItem(5, "AB_RS", "T-47 Airspeeder Harpoon Gun", "02E40241C121FFC301DAFABD154AA9D45AEFA3406EFFC8DE5732D4F3");
				addMenuItem(6, "AB_TU", "NN-14 Blaster Pistol", "1B7609FDC131FFD301DAFA7D14CAA9D45AEFA3406EFFF8DE53445DBD");
				addMenuItem(7, "EF_TU", "DL-44 Heavy Blaster Pistol", "23A4294FC139FFF701FAFAFD154AABD45CEFA34066FFC8DE73425DCB");
				addMenuItem(8, "EF_UV", "F-11D Blaster Rifle", "394A46B7C131FFD701DAFA7D15CAA8D45AEFA74066FFD8DE77B1D907");
				addMenuItem(9, "FAL01", "Imperial E-11 Blaster Rifle", "102A0FBBC13DFFD10132FB9D154AADD455AFA24058FFF8EE0E6A1F63");
				addMenuItem(10, "FAL02", "NN-14 Blaster Pistol", "3E427BCFC135FFE10152FBDD144AAED453AFAA4050FFF8EE36520A88");
				addMenuItem(11, "FAL06", "Z-6 Jetpack", "14F478E7C13DFFD10152FB1D15CAADD451AFA24058FFD8EE272DEB0C");
				addMenuItem(12, "FAL07", "7-PrG Proton Grenade", "38B058DFC12DFFC10112FB9D15CAAED451AFAE4048FFD8EE0FC5EF19");
				addMenuItem(13, "FAL08", "Concussion Disc", "24FA1C83C135FFD10172FB5D15CAAFD455AFA64048FFD8EE27AAFBD8");
				addMenuItem(14, "FAL15", "Imperial E-11 Blaster Rifle", "220C51C3C13DFFF10152FBDD144AAED457AFAA4058FFFCEE3CC099C7");
				addMenuItem(15, "FAL21", "Bowcaster", "23823083C135FFF10112FB9D15CAAED453AFA6404AFFE0EE0D2C1DA5");
				addMenuItem(16, "FG_RS", "Gungan Personal Energy Shield", "30BE24F3C13DFFDB0182FABD154AABD45CEFA34066FFC8DE173B5441");
				addMenuItem(17, "IJ_LM", "Concussion Disc", "20EAF029C129FFDB01BAFABD154AA9D458EFAF406EFFF8DE3908CF0E");
				addMenuItem(18, "IJ_PQ", "Glie-44 Blaster Pistol", "2768A3C5C129FFFB01FAFAFD15CAABD45EEFAB407EFFC8DE5262952A");
				addMenuItem(19, "IJ_QR", "Pyro Denton Explosive", "3D86CC3DC121FFDB01DAFA7D154AA8D458EFAF407EFFD8DE569111E6");
				addMenuItem(20, "IJ_RS", "7-PrG Proton Grenade", "32BCF291C131FFFB01BAFA7D15CAA8D458EFAB4076FFF8DE175514FB");
			}
			showSubmenu(menu);
		}
		if(isCodeAvailable()){ break; }
	}
	
	displayAztecCode();
} 

function showSubmenu(options) {
    while (true) {
		submenu.setHeader("Options:");

        for (let i = 0; i < options.length; i++) {
			//doNotify(i);
			let option = options[i];
            submenu.addItem(getOptionName(option), i);
        }
		
		let selectedId = submenu.show();

		if (selectedId === undefined) {
            break; // Go back to previous menu if the back button is pressed
        } else {
			clearScreen();
			print("Creating code...");
			
            let selectedOption = options[selectedId];
            
			let payload = hexToBin(selectedOption.payload);
			while(payload.length < 225){ payload += "0"; }
						
			let x = 70; let y = 15;
			binaryArray = Aztec.binaryStringToArray(payload, notify);
			widget.addText(x, y, "Primary", selectedOption.code);
			
			let splitArray = customSplit(getOptionName(selectedOption), " ");
			for (let i = 0; i < splitArray.length; i++) {
				doNotify(i);
				widget.addText(x, y + 10 + i * 10, "Secondary", splitArray[i]);
			}
			
			break;
        }
    }
}

mainMenu();
showAboutMessage();
clearScreen();
print("Press back to exit.");
