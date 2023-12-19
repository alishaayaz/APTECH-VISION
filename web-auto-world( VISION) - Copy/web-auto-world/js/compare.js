/* 
Site Name: Auto World.com
Documnet Type: Java Script
Coded By Alisha , hadia 
*/
/*** Global Arrays Using for all functions ***/
var bmw_128 = Array('$32,500', '3.0', '6', '230', '5', 'Convertible');
var bmw_328 = Array('$51,200', '3.0', '6', '230', '5', 'Sedan');
var bmw_x6 = Array('$30,500', '4.4', '8', '400', '6', 'Coupe');

var honda_civic = Array('$22,100', '1.8', '4', '113', '5', 'Hatchback');
var honda_city = Array('$23,100', '1.8', '4', '115', '5', 'Hatchback');
var honda_crv = Array('$19,900', '2.4', '4', '156', '5', 'Wagon');

var mazda_cx7 = Array('$41,200', '2.5', '4', '250', '6', 'SUV');
var mazda_rx8 = Array('$54,200', '1.3', '2', '210', '6', 'Quad Coupe');
var mazda_tribute = Array('$45,800', '2.5', '4', '240', '5', 'SUV');

var nissan_maxima = Array('$26,100', '3.5', '6', '290', '5', 'Sedan');
var nissan_sentra = Array('$22,800', '2.5', '4', '175', '5', 'Sedan');
var nissan_versa = Array('$31,400', '1.6', '4', '122', '4', 'Sedan');

var suzuki_cultus = Array('$10,200', '1.0', '6', '49', '4', 'Hatchback');
var suzuki_liana = Array('$17,200', '1.6', '4', '155', '5', 'Hatchback');
var suzuki_swift = Array('$11,500', '1.3', '4', '90', '5', 'Hatchback');

var toyota_camry = Array('$31,200', '1.6', '4', '158', '5', 'Sedan');
var toyota_corolla = Array('$23,900', '1.8', '4', '132', '4', 'Sedan');
var toyota_landcruiser = Array('$32,100', '5.7', '6', '275', '4', 'Station Wagon');

/*** Competitor 1***/
function getOptionValue() {

	alert("sd");

	var index = document.compare.competitor1.selectedIndex;
	if (index == 0) {
		document.compare.competitor1.selectedIndex = 0;
		document.compare.price1.value = "";
		document.compare.fuel1.value = "";
		document.compare.cylinders1.value = "";
		document.compare.horsepower1.value = "";
		document.compare.speed1.value = "";
		document.compare.body1.value = "";
	}
	else if (index == document.compare.competitor2.selectedIndex || index == document.compare.competitor3.selectedIndex) {
		alert("You Have Already Selected This Car");
		document.compare.competitor1.selectedIndex = 0;
		document.compare.price1.value = "";
		document.compare.fuel1.value = "";
		document.compare.cylinders1.value = "";
		document.compare.horsepower1.value = "";
		document.compare.speed1.value = "";
		document.compare.body1.value = "";
	}
	else {
		if (index == 1) {
			document.compare.price1.value = bmw_128[0];
			document.compare.fuel1.value = bmw_128[1];
			document.compare.cylinders1.value = bmw_128[2];
			document.compare.horsepower1.value = bmw_128[3];
			document.compare.speed1.value = bmw_128[4];
			document.compare.body1.value = bmw_128[5];
		}
		else if (index == 2) {
			document.compare.price1.value = bmw_328[0];
			document.compare.fuel1.value = bmw_328[1];
			document.compare.cylinders1.value = bmw_328[2];
			document.compare.horsepower1.value = bmw_328[3];
			document.compare.speed1.value = bmw_328[4];
			document.compare.body1.value = bmw_328[5];
		}
		else if (index == 3) {
			document.compare.price1.value = bmw_x6[0];
			document.compare.fuel1.value = bmw_x6[1];
			document.compare.cylinders1.value = bmw_x6[2];
			document.compare.horsepower1.value = bmw_x6[3];
			document.compare.speed1.value = bmw_x6[4];
			document.compare.body1.value = bmw_x6[5];
		}
		else if (index == 4) {
			document.compare.price1.value = honda_civic[0];
			document.compare.fuel1.value = honda_civic[1];
			document.compare.cylinders1.value = honda_civic[2];
			document.compare.horsepower1.value = honda_civic[3];
			document.compare.speed1.value = honda_civic[4];
			document.compare.body1.value = honda_civic[5];
		}
		else if (index == 5) {
			document.compare.price1.value = honda_city[0];
			document.compare.fuel1.value = honda_city[1];
			document.compare.cylinders1.value = honda_city[2];
			document.compare.horsepower1.value = honda_city[3];
			document.compare.speed1.value = honda_city[4];
			document.compare.body1.value = honda_city[5];
		}
		else if (index == 6) {
			document.compare.price1.value = honda_crv[0];
			document.compare.fuel1.value = honda_crv[1];
			document.compare.cylinders1.value = honda_crv[2];
			document.compare.horsepower1.value = honda_crv[3];
			document.compare.speed1.value = honda_crv[4];
			document.compare.body1.value = honda_crv[5];
		}
		else if (index == 7) {
			document.compare.price1.value = mazda_cx7[0];
			document.compare.fuel1.value = mazda_cx7[1];
			document.compare.cylinders1.value = mazda_cx7[2];
			document.compare.horsepower1.value = mazda_cx7[3];
			document.compare.speed1.value = mazda_cx7[4];
			document.compare.body1.value = mazda_cx7[5];
		}
		else if (index == 8) {
			document.compare.price1.value = mazda_rx8[0];
			document.compare.fuel1.value = mazda_rx8[1];
			document.compare.cylinders1.value = mazda_rx8[2];
			document.compare.horsepower1.value = mazda_rx8[3];
			document.compare.speed1.value = mazda_rx8[4];
			document.compare.body1.value = mazda_rx8[5];
		}
		else if (index == 9) {
			document.compare.price1.value = mazda_tribute[0];
			document.compare.fuel1.value = mazda_tribute[1];
			document.compare.cylinders1.value = mazda_tribute[2];
			document.compare.horsepower1.value = mazda_tribute[3];
			document.compare.speed1.value = mazda_tribute[4];
			document.compare.body1.value = mazda_tribute[5];
		}
		else if (index == 10) {
			document.compare.price1.value = nissan_maxima[0];
			document.compare.fuel1.value = nissan_maxima[1];
			document.compare.cylinders1.value = nissan_maxima[2];
			document.compare.horsepower1.value = nissan_maxima[3];
			document.compare.speed1.value = nissan_maxima[4];
			document.compare.body1.value = nissan_maxima[5];
		}
		else if (index == 11) {
			document.compare.price1.value = nissan_sentra[0];
			document.compare.fuel1.value = nissan_sentra[1];
			document.compare.cylinders1.value = nissan_sentra[2];
			document.compare.horsepower1.value = nissan_sentra[3];
			document.compare.speed1.value = nissan_sentra[4];
			document.compare.body1.value = nissan_sentra[5];
		}
		else if (index == 12) {
			document.compare.price1.value = nissan_versa[0];
			document.compare.fuel1.value = nissan_versa[1];
			document.compare.cylinders1.value = nissan_versa[2];
			document.compare.horsepower1.value = nissan_versa[3];
			document.compare.speed1.value = nissan_versa[4];
			document.compare.body1.value = nissan_versa[5];
		}
		else if (index == 13) {
			document.compare.price1.value = suzuki_cultus[0];
			document.compare.fuel1.value = suzuki_cultus[1];
			document.compare.cylinders1.value = suzuki_cultus[2];
			document.compare.horsepower1.value = suzuki_cultus[3];
			document.compare.speed1.value = suzuki_cultus[4];
			document.compare.body1.value = suzuki_cultus[5];
		}
		else if (index == 14) {
			document.compare.price1.value = suzuki_liana[0];
			document.compare.fuel1.value = suzuki_liana[1];
			document.compare.cylinders1.value = suzuki_liana[2];
			document.compare.horsepower1.value = suzuki_liana[3];
			document.compare.speed1.value = suzuki_liana[4];
			document.compare.body1.value = suzuki_liana[5];
		}
		else if (index == 15) {
			document.compare.price1.value = suzuki_swift[0];
			document.compare.fuel1.value = suzuki_swift[1];
			document.compare.cylinders1.value = suzuki_swift[2];
			document.compare.horsepower1.value = suzuki_swift[3];
			document.compare.speed1.value = suzuki_swift[4];
			document.compare.body1.value = suzuki_swift[5];
		}
		else if (index == 16) {
			document.compare.price1.value = toyota_camry[0];
			document.compare.fuel1.value = toyota_camry[1];
			document.compare.cylinders1.value = toyota_camry[2];
			document.compare.horsepower1.value = toyota_camry[3];
			document.compare.speed1.value = toyota_camry[4];
			document.compare.body1.value = toyota_camry[5];
		}
		else if (index == 17) {
			document.compare.price1.value = toyota_corolla[0];
			document.compare.fuel1.value = toyota_corolla[1];
			document.compare.cylinders1.value = toyota_corolla[2];
			document.compare.horsepower1.value = toyota_corolla[3];
			document.compare.speed1.value = toyota_corolla[4];
			document.compare.body1.value = toyota_corolla[5];
		}
		else if (index == 18) {
			document.compare.price1.value = toyota_landcruiser[0];
			document.compare.fuel1.value = toyota_landcruiser[1];
			document.compare.cylinders1.value = toyota_landcruiser[2];
			document.compare.horsepower1.value = toyota_landcruiser[3];
			document.compare.speed1.value = toyota_landcruiser[4];
			document.compare.body1.value = toyota_landcruiser[5];
		}
		else {
			document.compare.price1.value = "";
			document.compare.fuel1.value = "";
			document.compare.cylinders1.value = "";
			document.compare.horsepower1.value = "";
			document.compare.speed1.value = "";
			document.compare.body1.value = "";
		}
	}
}

/*** Competitor 2***/
function getOptionValue2() {
	var index = document.compare.competitor2.selectedIndex;
	if (index == 0) {
		document.compare.competitor2.selectedIndex = 0;
		document.compare.price2.value = "";
		document.compare.fuel2.value = "";
		document.compare.cylinders2.value = "";
		document.compare.horsepower2.value = "";
		document.compare.speed2.value = "";
		document.compare.body2.value = "";
	}
	else if (index == document.compare.competitor1.selectedIndex || index == document.compare.competitor3.selectedIndex) {
		alert("You Have Already Selected This Car");
		document.compare.competitor2.selectedIndex = 0;
		document.compare.price2.value = "";
		document.compare.fuel2.value = "";
		document.compare.cylinders2.value = "";
		document.compare.horsepower2.value = "";
		document.compare.speed2.value = "";
		document.compare.body2.value = "";
	}
	else {
		if (index == 1) {
			document.compare.price2.value = bmw_128[0];
			document.compare.fuel2.value = bmw_128[1];
			document.compare.cylinders2.value = bmw_128[2];
			document.compare.horsepower2.value = bmw_128[3];
			document.compare.speed2.value = bmw_128[4];
			document.compare.body2.value = bmw_128[5];
		}
		else if (index == 2) {
			document.compare.price2.value = bmw_328[0];
			document.compare.fuel2.value = bmw_328[1];
			document.compare.cylinders2.value = bmw_328[2];
			document.compare.horsepower2.value = bmw_328[3];
			document.compare.speed2.value = bmw_328[4];
			document.compare.body2.value = bmw_328[5];
		}
		else if (index == 3) {
			document.compare.price2.value = bmw_x6[0];
			document.compare.fuel2.value = bmw_x6[1];
			document.compare.cylinders2.value = bmw_x6[2];
			document.compare.horsepower2.value = bmw_x6[3];
			document.compare.speed2.value = bmw_x6[4];
			document.compare.body2.value = bmw_x6[5];
		}
		else if (index == 4) {
			document.compare.price2.value = honda_civic[0];
			document.compare.fuel2.value = honda_civic[1];
			document.compare.cylinders2.value = honda_civic[2];
			document.compare.horsepower2.value = honda_civic[3];
			document.compare.speed2.value = honda_civic[4];
			document.compare.body2.value = honda_civic[5];
		}
		else if (index == 5) {
			document.compare.price2.value = honda_city[0];
			document.compare.fuel2.value = honda_city[1];
			document.compare.cylinders2.value = honda_city[2];
			document.compare.horsepower2.value = honda_city[3];
			document.compare.speed2.value = honda_city[4];
			document.compare.body2.value = honda_city[5];
		}
		else if (index == 6) {
			document.compare.price2.value = honda_crv[0];
			document.compare.fuel2.value = honda_crv[1];
			document.compare.cylinders2.value = honda_crv[2];
			document.compare.horsepower2.value = honda_crv[3];
			document.compare.speed2.value = honda_crv[4];
			document.compare.body2.value = honda_crv[5];
		}
		else if (index == 7) {
			document.compare.price2.value = mazda_cx7[0];
			document.compare.fuel2.value = mazda_cx7[1];
			document.compare.cylinders2.value = mazda_cx7[2];
			document.compare.horsepower2.value = mazda_cx7[3];
			document.compare.speed2.value = mazda_cx7[4];
			document.compare.body2.value = mazda_cx7[5];
		}
		else if (index == 8) {
			document.compare.price2.value = mazda_rx8[0];
			document.compare.fuel2.value = mazda_rx8[1];
			document.compare.cylinders2.value = mazda_rx8[2];
			document.compare.horsepower2.value = mazda_rx8[3];
			document.compare.speed2.value = mazda_rx8[4];
			document.compare.body2.value = mazda_rx8[5];
		}
		else if (index == 9) {
			document.compare.price2.value = mazda_tribute[0];
			document.compare.fuel2.value = mazda_tribute[1];
			document.compare.cylinders2.value = mazda_tribute[2];
			document.compare.horsepower2.value = mazda_tribute[3];
			document.compare.speed2.value = mazda_tribute[4];
			document.compare.body2.value = mazda_tribute[5];
		}
		else if (index == 10) {
			document.compare.price2.value = nissan_maxima[0];
			document.compare.fuel2.value = nissan_maxima[1];
			document.compare.cylinders2.value = nissan_maxima[2];
			document.compare.horsepower2.value = nissan_maxima[3];
			document.compare.speed2.value = nissan_maxima[4];
			document.compare.body2.value = nissan_maxima[5];
		}
		else if (index == 11) {
			document.compare.price2.value = nissan_sentra[0];
			document.compare.fuel2.value = nissan_sentra[1];
			document.compare.cylinders2.value = nissan_sentra[2];
			document.compare.horsepower2.value = nissan_sentra[3];
			document.compare.speed2.value = nissan_sentra[4];
			document.compare.body2.value = nissan_sentra[5];
		}
		else if (index == 12) {
			document.compare.price2.value = nissan_versa[0];
			document.compare.fuel2.value = nissan_versa[1];
			document.compare.cylinders2.value = nissan_versa[2];
			document.compare.horsepower2.value = nissan_versa[3];
			document.compare.speed2.value = nissan_versa[4];
			document.compare.body2.value = nissan_versa[5];
		}
		else if (index == 13) {
			document.compare.price2.value = suzuki_cultus[0];
			document.compare.fuel2.value = suzuki_cultus[1];
			document.compare.cylinders2.value = suzuki_cultus[2];
			document.compare.horsepower2.value = suzuki_cultus[3];
			document.compare.speed2.value = suzuki_cultus[4];
			document.compare.body2.value = suzuki_cultus[5];
		}
		else if (index == 14) {
			document.compare.price2.value = suzuki_liana[0];
			document.compare.fuel2.value = suzuki_liana[1];
			document.compare.cylinders2.value = suzuki_liana[2];
			document.compare.horsepower2.value = suzuki_liana[3];
			document.compare.speed2.value = suzuki_liana[4];
			document.compare.body2.value = suzuki_liana[5];
		}
		else if (index == 15) {
			document.compare.price2.value = suzuki_swift[0];
			document.compare.fuel2.value = suzuki_swift[1];
			document.compare.cylinders2.value = suzuki_swift[2];
			document.compare.horsepower2.value = suzuki_swift[3];
			document.compare.speed2.value = suzuki_swift[4];
			document.compare.body2.value = suzuki_swift[5];
		}
		else if (index == 16) {
			document.compare.price2.value = toyota_camry[0];
			document.compare.fuel2.value = toyota_camry[1];
			document.compare.cylinders2.value = toyota_camry[2];
			document.compare.horsepower2.value = toyota_camry[3];
			document.compare.speed2.value = toyota_camry[4];
			document.compare.body2.value = toyota_camry[5];
		}
		else if (index == 17) {
			document.compare.price2.value = toyota_corolla[0];
			document.compare.fuel2.value = toyota_corolla[1];
			document.compare.cylinders2.value = toyota_corolla[2];
			document.compare.horsepower2.value = toyota_corolla[3];
			document.compare.speed2.value = toyota_corolla[4];
			document.compare.body2.value = toyota_corolla[5];
		}
		else if (index == 18) {
			document.compare.price2.value = toyota_landcruiser[0];
			document.compare.fuel2.value = toyota_landcruiser[1];
			document.compare.cylinders2.value = toyota_landcruiser[2];
			document.compare.horsepower2.value = toyota_landcruiser[3];
			document.compare.speed2.value = toyota_landcruiser[4];
			document.compare.body2.value = toyota_landcruiser[5];
		}
		else {
			document.compare.price2.value = "";
			document.compare.fuel2.value = "";
			document.compare.cylinders2.value = "";
			document.compare.horsepower2.value = "";
			document.compare.speed2.value = "";
			document.compare.body2.value = "";
		}
	}
}


/*** Competitor 3***/
function getOptionValue3() {
	var index = document.compare.competitor3.selectedIndex;
	if (index == 0) {
		document.compare.competitor3.selectedIndex = 0;
		document.compare.price3.value = "";
		document.compare.fuel3.value = "";
		document.compare.cylinders3.value = "";
		document.compare.horsepower3.value = "";
		document.compare.speed3.value = "";
		document.compare.body3.value = "";
	}
	else if (index == document.compare.competitor1.selectedIndex || index == document.compare.competitor2.selectedIndex) {
		alert("You Have Already Selected This Car");
		document.compare.competitor3.selectedIndex = 0;
		document.compare.price3.value = "";
		document.compare.fuel3.value = "";
		document.compare.cylinders3.value = "";
		document.compare.horsepower3.value = "";
		document.compare.speed3.value = "";
		document.compare.body3.value = "";
	}
	else {
		if (index == 1) {
			document.compare.price3.value = bmw_128[0];
			document.compare.fuel3.value = bmw_128[1];
			document.compare.cylinders3.value = bmw_128[2];
			document.compare.horsepower3.value = bmw_128[3];
			document.compare.speed3.value = bmw_128[4];
			document.compare.body3.value = bmw_128[5];
		}
		else if (index == 2) {
			document.compare.price3.value = bmw_328[0];
			document.compare.fuel3.value = bmw_328[1];
			document.compare.cylinders3.value = bmw_328[2];
			document.compare.horsepower3.value = bmw_328[3];
			document.compare.speed3.value = bmw_328[4];
			document.compare.body3.value = bmw_328[5];
		}
		else if (index == 3) {
			document.compare.price3.value = bmw_x6[0];
			document.compare.fuel3.value = bmw_x6[1];
			document.compare.cylinders3.value = bmw_x6[2];
			document.compare.horsepower3.value = bmw_x6[3];
			document.compare.speed3.value = bmw_x6[4];
			document.compare.body3.value = bmw_x6[5];
		}
		else if (index == 4) {
			document.compare.price3.value = honda_civic[0];
			document.compare.fuel3.value = honda_civic[1];
			document.compare.cylinders3.value = honda_civic[2];
			document.compare.horsepower3.value = honda_civic[3];
			document.compare.speed3.value = honda_civic[4];
			document.compare.body3.value = honda_civic[5];
		}
		else if (index == 5) {
			document.compare.price3.value = honda_city[0];
			document.compare.fuel3.value = honda_city[1];
			document.compare.cylinders3.value = honda_city[2];
			document.compare.horsepower3.value = honda_city[3];
			document.compare.speed3.value = honda_city[4];
			document.compare.body3.value = honda_city[5];
		}
		else if (index == 6) {
			document.compare.price3.value = honda_crv[0];
			document.compare.fuel3.value = honda_crv[1];
			document.compare.cylinders3.value = honda_crv[2];
			document.compare.horsepower3.value = honda_crv[3];
			document.compare.speed3.value = honda_crv[4];
			document.compare.body3.value = honda_crv[5];
		}
		else if (index == 7) {
			document.compare.price3.value = mazda_cx7[0];
			document.compare.fuel3.value = mazda_cx7[1];
			document.compare.cylinders3.value = mazda_cx7[2];
			document.compare.horsepower3.value = mazda_cx7[3];
			document.compare.speed3.value = mazda_cx7[4];
			document.compare.body3.value = mazda_cx7[5];
		}
		else if (index == 8) {
			document.compare.price3.value = mazda_rx8[0];
			document.compare.fuel3.value = mazda_rx8[1];
			document.compare.cylinders3.value = mazda_rx8[2];
			document.compare.horsepower3.value = mazda_rx8[3];
			document.compare.speed3.value = mazda_rx8[4];
			document.compare.body3.value = mazda_rx8[5];
		}
		else if (index == 9) {
			document.compare.price3.value = mazda_tribute[0];
			document.compare.fuel3.value = mazda_tribute[1];
			document.compare.cylinders3.value = mazda_tribute[2];
			document.compare.horsepower3.value = mazda_tribute[3];
			document.compare.speed3.value = mazda_tribute[4];
			document.compare.body3.value = mazda_tribute[5];
		}
		else if (index == 10) {
			document.compare.price3.value = nissan_maxima[0];
			document.compare.fuel3.value = nissan_maxima[1];
			document.compare.cylinders3.value = nissan_maxima[2];
			document.compare.horsepower3.value = nissan_maxima[3];
			document.compare.speed3.value = nissan_maxima[4];
			document.compare.body3.value = nissan_maxima[5];
		}
		else if (index == 11) {
			document.compare.price3.value = nissan_sentra[0];
			document.compare.fuel3.value = nissan_sentra[1];
			document.compare.cylinders3.value = nissan_sentra[2];
			document.compare.horsepower3.value = nissan_sentra[3];
			document.compare.speed3.value = nissan_sentra[4];
			document.compare.body3.value = nissan_sentra[5];
		}
		else if (index == 12) {
			document.compare.price3.value = nissan_versa[0];
			document.compare.fuel3.value = nissan_versa[1];
			document.compare.cylinders3.value = nissan_versa[2];
			document.compare.horsepower3.value = nissan_versa[3];
			document.compare.speed3.value = nissan_versa[4];
			document.compare.body3.value = nissan_versa[5];
		}
		else if (index == 13) {
			document.compare.price3.value = suzuki_cultus[0];
			document.compare.fuel3.value = suzuki_cultus[1];
			document.compare.cylinders3.value = suzuki_cultus[2];
			document.compare.horsepower3.value = suzuki_cultus[3];
			document.compare.speed3.value = suzuki_cultus[4];
			document.compare.body3.value = suzuki_cultus[5];
		}
		else if (index == 14) {
			document.compare.price3.value = suzuki_liana[0];
			document.compare.fuel3.value = suzuki_liana[1];
			document.compare.cylinders3.value = suzuki_liana[2];
			document.compare.horsepower3.value = suzuki_liana[3];
			document.compare.speed3.value = suzuki_liana[4];
			document.compare.body3.value = suzuki_liana[5];
		}
		else if (index == 15) {
			document.compare.price3.value = suzuki_swift[0];
			document.compare.fuel3.value = suzuki_swift[1];
			document.compare.cylinders3.value = suzuki_swift[2];
			document.compare.horsepower3.value = suzuki_swift[3];
			document.compare.speed3.value = suzuki_swift[4];
			document.compare.body3.value = suzuki_swift[5];
		}
		else if (index == 16) {
			document.compare.price3.value = toyota_camry[0];
			document.compare.fuel3.value = toyota_camry[1];
			document.compare.cylinders3.value = toyota_camry[2];
			document.compare.horsepower3.value = toyota_camry[3];
			document.compare.speed3.value = toyota_camry[4];
			document.compare.body3.value = toyota_camry[5];
		}
		else if (index == 17) {
			document.compare.price3.value = toyota_corolla[0];
			document.compare.fuel3.value = toyota_corolla[1];
			document.compare.cylinders3.value = toyota_corolla[2];
			document.compare.horsepower3.value = toyota_corolla[3];
			document.compare.speed3.value = toyota_corolla[4];
			document.compare.body3.value = toyota_corolla[5];
		}
		else if (index == 18) {
			document.compare.price3.value = toyota_landcruiser[0];
			document.compare.fuel3.value = toyota_landcruiser[1];
			document.compare.cylinders3.value = toyota_landcruiser[2];
			document.compare.horsepower3.value = toyota_landcruiser[3];
			document.compare.speed3.value = toyota_landcruiser[4];
			document.compare.body3.value = toyota_landcruiser[5];
		}
		else {
			document.compare.price3.value = "";
			document.compare.fuel3.value = "";
			document.compare.cylinders3.value = "";
			document.compare.horsepower3.value = "";
			document.compare.speed3.value = "";
			document.compare.body3.value = "";
		}
	}
}
