//fill in the read stuff later
//simulate it for now

var Parser = require('./parser.js');
var file1 = [];
var file2 = [];
file1[0] = "Fedex850.txt";
file1[1] = "ISA*00*          *00*          *ZZ*FXK            *ZZ*ODXPEDX        *150202*1329*U*00201*000133910*0*P*^~GS*PO*FXK*ODXPEDX*20150202*1329*133910*X*004010~ST*850*339100001~BEG*00*NE*0006890717**20150202~CUR*BY*USD~REF*OR*MAIN~TD5*****VENDOR DELIVERY METHOD~N9*ZZ**CompanyID~MSG*FXK01~N9*ZZ**RequesterEmpNum~MSG*FX2269663~N1*BT*FedEx Office and Print Service*92*FedEx Office and Print Service~N2*P.O. Box 262683~N4*Plano*TX*750262683*USA~N1*ST*FedEx Office and Print 5897*92*FK04305897~N2*FX2269663 Wheeler,Brian K~N3*11751 S Cleveland Ave*Ste 14~N4*Ft Myers*FL*33907*USA~PER*RE*WORK*TE*239/936-7766~PO1*1*8*CT*52.09**VP*200000***IN*200000~CUR*BY*USD~PID*F****LZ, 24 lb Laser, 8.5x11****EN~SAC*N*B840***41672~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*2*2*CT*52.09**VP*200002***IN*200002~CUR*BY*USD~PID*F****LZX, 24 lb Laser, 11x17****EN~SAC*N*B840***10418~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*3*1*BD*22.64**VP*470135***IN*470135~CUR*BY*USD~PID*F****Chipboard, 8.5x11, 50lb, 850 per bdl****EN~SAC*N*B840***2264~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*4*1*BD*22.24**VP*470136***IN*470136~CUR*BY*USD~PID*F****Chipboard, 11x17, 50lb, 400 per bdl****EN~SAC*N*B840***2224~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*5*1*CA*124.63**VP*801406***IN*801406~CUR*BY*USD~PID*F****RGD03, Self-Adhesive, Foam Board, White, 32in x 40in, 3/16****EN~SAC*N*B840***12463~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*6*1*CT*51.29**VP*810230***IN*810230~CUR*BY*USD~PID*F****EC0, Resume Cardstock, Ultra Bright White, 8.5x11****EN~SAC*N*B840***5129~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*7*1*CT*26.89**VP*820013***IN*820013~CUR*BY*USD~PID*F****Box, Tab, 10x11x4****EN~SAC*N*B840***2689~CUR*BY*USD~TXI*ST*1.61~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*8*1*CT*42.13**VP*830057***IN*830057~CUR*BY*USD~PID*F****LF Engineering Rolls 36 in x 500 ft white 20 lb****EN~SAC*N*B840***4213~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*9*1*CT*40.42**VP*800103***IN*800103~CUR*BY*USD~PID*F****P3  Pastel Goldenrod, Hammermill Fore MP, 20 lb, 8.5 x 11****EN~SAC*N*B840***4042~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*10*1*CT*58.01**VP*800263*MG*808011*IN*800263~CUR*BY*USD~PID*F****CC2 Glossy Coated Cover,8.5 x 11, 10pt Carolina C2S****EN~SAC*N*B840***5801~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*11*3*CT*30.93**VP*100000***IN*100000~CUR*BY*USD~PID*F****W, Standard White, 8.5x11****EN~SAC*N*B840***9279~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~PO1*12*1*CT*33.1**VP*100002***IN*100002~CUR*BY*USD~PID*F****WX, Standard White, 11x17****EN~SAC*N*B840***3310~CUR*BY*USD~TXI*ST*0~N9*ZZ**Requester~MSG*FX2269663 Wheeler,Brian K~CTT*12*22~AMT*TT*1036.65~SE*116*339100001~GE*1*133910~IEA*1*000133910~";
file2[0] = "Buckle850.txt";
file2[1] = "ISA*00*          *00*          *08*6127770000     *ZZ*9498296190     *150202*1400*U*00501*000000740*0*P*:~GS*PO*6127770000*9498296190*20150202*1400*740*X*005010~ST*850*7400001~BEG*00*SA*0355415**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*400*EA*16*LE*UP*888896202803*IT*94220*BO*01T*IZ*MEDIUM~CTP**RES*40~PID*F****FACTORY PARK GLOVE~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0002*400*EA*16*LE*UP*888896202834*IT*94220*BO*01T*IZ*LARGE~CTP**RES*40~PID*F****FACTORY PARK GLOVE~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0003*90*EA*22*LE*UP*888896200496*IT*94234*BO*01K*IZ*MEDIUM~CTP**RES*55~PID*F****FACTORY PIPE GLOVE~SDQ*EA*92*900*90~DTM*001*20150904~DTM*010*20150824~PO1*0004*90*EA*22*LE*UP*888896200526*IT*94234*BO*01K*IZ*LARGE~CTP**RES*55~PID*F****FACTORY PIPE GLOVE~SDQ*EA*92*900*90~DTM*001*20150904~DTM*010*20150824~CTT*4~SE*34*7400001~ST*850*7400002~BEG*00*SA*0355417**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*200*EA*12*LE*UP*888896200311*IT*92548*BO*799~CTP**RES*30~PID*F****BODY BAG 2.0 DOP KIT~SDQ*EA*92*900*200~DTM*001*20150702~DTM*010*20150622~PO1*0002*200*EA*12*LE*UP*887288632440*IT*92548001*BO*001~CTP**RES*30~PID*F****BODY BAG 2.0 DOP KIT~SDQ*EA*92*900*200~DTM*001*20150702~DTM*010*20150622~CTT*2~SE*22*7400002~ST*850*7400003~BEG*00*SA*0355419**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*600*EA*12*LE*UP*887288632440*IT*92548001*BO*001~CTP**RES*30~PID*F****BODY BAG 2.0 DOP KIT~SDQ*EA*92*900*600~DTM*001*20151106~DTM*010*20151026~CTT*1~SE*16*7400003~ST*850*7400004~BEG*00*SA*0355420**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*600*EA*7.2*LE*UP*885614632386*IT*93115*BO*BLK*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150605~DTM*010*20150526~PO1*0002*600*EA*7.2*LE*UP*885614632379*IT*93115*BO*BLK*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150605~DTM*010*20150526~PO1*0003*1300*EA*7.2*LE*UP*887288631238*IT*93115*BO*998*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*1300~DTM*001*20150605~DTM*010*20150526~PO1*0004*1300*EA*7.2*LE*UP*887288631221*IT*93115*BO*998*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*1300~DTM*001*20150605~DTM*010*20150526~CTT*4~SE*34*7400004~ST*850*7400005~BEG*00*SA*0355422**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*600*EA*7.2*LE*UP*885614632386*IT*93115*BO*BLK*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150807~DTM*010*20150727~PO1*0002*600*EA*7.2*LE*UP*885614632379*IT*93115*BO*BLK*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150807~DTM*010*20150727~PO1*0003*600*EA*7.2*LE*UP*887288631238*IT*93115*BO*998*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150807~DTM*010*20150727~PO1*0004*600*EA*7.2*LE*UP*887288631221*IT*93115*BO*998*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*600~DTM*001*20150807~DTM*010*20150727~PO1*0005*1200*EA*8*LE*UP*885614633956*IT*93116*BO*BLK*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*1200~DTM*001*20150807~DTM*010*20150727~PO1*0006*1200*EA*8*LE*UP*885614633949*IT*93116*BO*BLK*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*1200~DTM*001*20150807~DTM*010*20150727~PO1*0007*1300*EA*8*LE*UP*887288631252*IT*93116*BO*998*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*1300~DTM*001*20150807~DTM*010*20150727~PO1*0008*1300*EA*8*LE*UP*887288631245*IT*93116*BO*998*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*1300~DTM*001*20150807~DTM*010*20150727~CTT*8~SE*58*7400005~ST*850*7400006~BEG*00*SA*0355425**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*400*EA*7.2*LE*UP*885614632386*IT*93115*BO*BLK*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0002*400*EA*7.2*LE*UP*885614632379*IT*93115*BO*BLK*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0003*400*EA*7.2*LE*UP*887288631238*IT*93115*BO*998*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0004*400*EA*7.2*LE*UP*887288631221*IT*93115*BO*998*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*400~DTM*001*20150904~DTM*010*20150824~PO1*0005*500*EA*8*LE*UP*885614633956*IT*93116*BO*BLK*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20150904~DTM*010*20150824~PO1*0006*500*EA*8*LE*UP*885614633949*IT*93116*BO*BLK*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20150904~DTM*010*20150824~PO1*0007*500*EA*8*LE*UP*887288631252*IT*93116*BO*998*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20150904~DTM*010*20150824~PO1*0008*500*EA*8*LE*UP*887288631245*IT*93116*BO*998*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20150904~DTM*010*20150824~CTT*8~SE*58*7400006~ST*850*7400007~BEG*00*SA*0355427**20150129~CUR*BY*USD~REF*DP*041~REF*IA*64040~PER*CN*Becky Janicek*EM*Becky.Janicek@Buckle.com~CSH*P2~ITD*04*1*****30~PO1*0001*300*EA*7.2*LE*UP*885614632386*IT*93115*BO*BLK*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*300~DTM*001*20151002~DTM*010*20150921~PO1*0002*300*EA*7.2*LE*UP*885614632379*IT*93115*BO*BLK*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*300~DTM*001*20151002~DTM*010*20150921~PO1*0003*300*EA*7.2*LE*UP*887288631238*IT*93115*BO*998*IZ*MEDIUM~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*300~DTM*001*20151002~DTM*010*20150921~PO1*0004*300*EA*7.2*LE*UP*887288631221*IT*93115*BO*998*IZ*LARGE~CTP**RES*18~PID*F****PERFORMANCE BASIC LO~SDQ*EA*92*900*300~DTM*001*20151002~DTM*010*20150921~PO1*0005*500*EA*8*LE*UP*885614633956*IT*93116*BO*BLK*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20151002~DTM*010*20150921~PO1*0006*500*EA*8*LE*UP*885614633949*IT*93116*BO*BLK*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20151002~DTM*010*20150921~PO1*0007*500*EA*8*LE*UP*887288631252*IT*93116*BO*998*IZ*MEDIUM~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20151002~DTM*010*20150921~PO1*0008*500*EA*8*LE*UP*887288631245*IT*93116*BO*998*IZ*LARGE~CTP**RES*20~PID*F****PERFORMANCE BASIC HL~SDQ*EA*92*900*500~DTM*001*20151002~DTM*010*20150921~CTT*8~SE*58*7400007~GE*7*740~IEA*1*000000740~";

var filenames = [];
var pathsCombined = [];
var dataCombined = [];
var keepGoing = true;

for(var i = 0; i < 2; i++){
	var ediArray = [];
	if (i == 0){
		ediArray = file1;
	}
	else {
		ediArray = file2; 
	}
	
	var p = new Parser(ediArray);
	var dataObjs = p.process_data();
	var selection = p.output_1(dataObjs);
	
	//concatenate
	pathsCombined = pathsCombined.concat(selection);
	dataCombined = dataCombined.concat(dataObjs);
	filenames.push(ediArray[0]);
	//console.log(i);
	//console.log(pathsCombined.length);
	//console.log(dataCombined.length);
	


}

//console.log(pathsCombined);

//need to remove duplicate paths
//console.log(pathsCombined.length);
var uniquePaths = [];

uniquePaths = pathsCombined.reverse().filter(function (e, i, arr) {
		return pathsCombined.indexOf(e, i+1) === -1;
}).reverse();

//console.log(uniquePaths.length);
//console.log(uniquePaths);

//GET SELECTED PATHS FROM THE USER

var userSelection = ["ISA-00", "ST-01", "N1-02", "N1.N3-01", "P01.PID-05"];

var selectedData = p.user_input(userSelection, dataCombined);
console.log(selectedData);

//generate outputs

var excelBuilder = require('./excel-writer.js');

var e = new excelBuilder('./uploads', '850_1.xls');

//column 1 is filenames

var counts = []; //use same index as the filename

//get a count of each entries per file
for (var i = 0; i < selectedData[1].length; i++){
	for (var j = 0; j < filenames.length; j++){
		if (typeof counts[j] === 'undefined'){
			counts[j] = 0;
		}
		if (selectedData[2][i] == filenames[j]){
			counts[j]++;		
		}
	}
}


//create contents of column 1 (filenames)

var col1 = [];
col1.push("Message ID");
for (var i = 0; i < filenames.length; i++){
	for (var j = 0; j < counts[i]; j++){
		col1.push(filenames[i]);
	}
}
e.addData(col1);

//console.log("Column 1");
//console.log(col1);

//remaining columns are dependent on number of fields selected

//in order of files to keep order in excel
for (var i = 0; i < userSelection.length; i++){
	var aColumn = [];
	aColumn.push(userSelection[i]);
	for (var j = 0; j < filenames.length; j++){
		for (var k = 0; k < selectedData[0].length; k++){
			if (filenames[j] == selectedData[2][k]){
				if (userSelection[i] == selectedData[0][k]){
					aColumn.push(selectedData[1][k]);
				} else {
					aColumn.push("");
				}
				
			}
		
				
		}
		
	}
	//console.log("Another Column");
	//console.log(aColumn);
	e.addData(aColumn);
	
}

e.writeFile();



//e.addData(data[0]);
//e.addData(data[1]);


