import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const filters = () => {
  return {
      query: '',
      //cars between 2000-2018
      from: 2000,
      to: 2018,
      //cars that cost between 0-20000
      min_price: 0,
      max_price: 20000,
      //if the car is available or not (by default: false)
      available: false
    }
}

export default new Vuex.Store({
  state: {
    cars: [{ "id": 1, "car_model": "Swift", "car_model_year": 2004, "price": "$16996.19", "available": false },
    { "id": 2, "car_model": "Titan", "car_model_year": 2008, "price": "$8780.93", "available": false },
    { "id": 3, "car_model": "G-Series G10", "car_model_year": 1994, "price": "$13735.55", "available": true },
    { "id": 4, "car_model": "Outlander", "car_model_year": 2005, "price": "$9556.53", "available": true },
    { "id": 5, "car_model": "QX56", "car_model_year": 2010, "price": "$9681.93", "available": true },
    { "id": 6, "car_model": "Tiburon", "car_model_year": 2004, "price": "$12728.34", "available": true },
    { "id": 7, "car_model": "Santa Fe", "car_model_year": 2006, "price": "$18993.22", "available": false },
    { "id": 8, "car_model": "Golf", "car_model_year": 1999, "price": "$11379.29", "available": true },
    { "id": 9, "car_model": "Avanti", "car_model_year": 1964, "price": "$13038.38", "available": false },
    { "id": 10, "car_model": "Suburban 1500", "car_model_year": 1992, "price": "$13091.19", "available": true },
    { "id": 11, "car_model": "S60", "car_model_year": 2006, "price": "$6700.59", "available": false },
    { "id": 12, "car_model": "CR-V", "car_model_year": 1998, "price": "$16923.61", "available": false },
    { "id": 13, "car_model": "G-Class", "car_model_year": 2011, "price": "$5338.74", "available": true },
    { "id": 14, "car_model": "Familia", "car_model_year": 1987, "price": "$11864.69", "available": false },
    { "id": 15, "car_model": "Caravan", "car_model_year": 2004, "price": "$19260.31", "available": false },
    { "id": 16, "car_model": "RX-8", "car_model_year": 2006, "price": "$15213.51", "available": false },
    { "id": 17, "car_model": "Suburban 2500", "car_model_year": 2003, "price": "$11335.32", "available": false },
    { "id": 18, "car_model": "Fit", "car_model_year": 2008, "price": "$5685.63", "available": false },
    { "id": 19, "car_model": "Civic", "car_model_year": 1990, "price": "$10731.76", "available": false },
    { "id": 20, "car_model": "Impala", "car_model_year": 2012, "price": "$11687.54", "available": false },
    { "id": 21, "car_model": "Corvette", "car_model_year": 1967, "price": "$14384.23", "available": true },
    { "id": 22, "car_model": "NSX", "car_model_year": 1994, "price": "$9534.37", "available": true },
    { "id": 23, "car_model": "Eclipse", "car_model_year": 1998, "price": "$9182.59", "available": true },
    { "id": 24, "car_model": "Highlander", "car_model_year": 2006, "price": "$10497.23", "available": false },
    { "id": 25, "car_model": "Titan", "car_model_year": 2008, "price": "$14141.45", "available": true },
    { "id": 26, "car_model": "New Beetle", "car_model_year": 2006, "price": "$5796.25", "available": true },
    { "id": 27, "car_model": "Xterra", "car_model_year": 2000, "price": "$5103.31", "available": true },
    { "id": 28, "car_model": "Cooper", "car_model_year": 2012, "price": "$17765.53", "available": false },
    { "id": 29, "car_model": "ZX2", "car_model_year": 2002, "price": "$13033.05", "available": true },
    { "id": 30, "car_model": "Town Car", "car_model_year": 1988, "price": "$18602.30", "available": false },
    { "id": 31, "car_model": "300", "car_model_year": 2006, "price": "$13074.77", "available": true },
    { "id": 32, "car_model": "S10", "car_model_year": 1999, "price": "$18497.34", "available": false },
    { "id": 33, "car_model": "Alero", "car_model_year": 1999, "price": "$14705.17", "available": true },
    { "id": 34, "car_model": "M6", "car_model_year": 2007, "price": "$5232.19", "available": true },
    { "id": 35, "car_model": "Starion", "car_model_year": 1987, "price": "$16274.44", "available": false },
    { "id": 36, "car_model": "F250", "car_model_year": 2005, "price": "$16429.87", "available": true },
    { "id": 37, "car_model": "Viper", "car_model_year": 1996, "price": "$6393.62", "available": false },
    { "id": 38, "car_model": "GranTurismo", "car_model_year": 2010, "price": "$11316.41", "available": false },
    { "id": 39, "car_model": "200SX", "car_model_year": 1997, "price": "$5220.72", "available": false },
    { "id": 40, "car_model": "Accord", "car_model_year": 2003, "price": "$8709.81", "available": true },
    { "id": 41, "car_model": "California", "car_model_year": 2010, "price": "$16910.65", "available": true },
    { "id": 42, "car_model": "1500", "car_model_year": 2011, "price": "$15339.87", "available": true },
    { "id": 43, "car_model": "Silverado 3500", "car_model_year": 2007, "price": "$6330.85", "available": false },
    { "id": 44, "car_model": "Tacoma", "car_model_year": 2002, "price": "$12186.54", "available": true },
    { "id": 45, "car_model": "3500", "car_model_year": 1995, "price": "$14556.21", "available": true },
    { "id": 46, "car_model": "Truck", "car_model_year": 1991, "price": "$12788.73", "available": false },
    { "id": 47, "car_model": "Achieva", "car_model_year": 1992, "price": "$12246.40", "available": false },
    { "id": 48, "car_model": "M3", "car_model_year": 1997, "price": "$14204.54", "available": true },
    { "id": 49, "car_model": "2500", "car_model_year": 1994, "price": "$14332.83", "available": false },
    { "id": 50, "car_model": "Sephia", "car_model_year": 1996, "price": "$7956.99", "available": true },
    { "id": 51, "car_model": "RL", "car_model_year": 2000, "price": "$12993.67", "available": false },
    { "id": 52, "car_model": "Cayenne", "car_model_year": 2010, "price": "$18407.85", "available": true },
    {
      "id": 53,
      "car_model": "Firebird Formula",
      "car_model_year": 1992,
      "price": "$12054.93",
      "available": false
    },
    { "id": 54, "car_model": "9000", "car_model_year": 1996, "price": "$15822.53", "available": true },
    { "id": 55, "car_model": "V50", "car_model_year": 2005, "price": "$9018.35", "available": false },
    { "id": 56, "car_model": "Land Cruiser", "car_model_year": 1994, "price": "$12771.57", "available": false },
    { "id": 57, "car_model": "GL-Class", "car_model_year": 2008, "price": "$10501.46", "available": false },
    { "id": 58, "car_model": "960", "car_model_year": 1992, "price": "$19749.15", "available": true },
    { "id": 59, "car_model": "SC", "car_model_year": 1998, "price": "$15305.03", "available": true },
    { "id": 60, "car_model": "Oasis", "car_model_year": 1997, "price": "$5401.66", "available": true },
    { "id": 61, "car_model": "Neon", "car_model_year": 1997, "price": "$12028.39", "available": true },
    {
      "id": 62,
      "car_model": "Continental Flying Spur",
      "car_model_year": 2012,
      "price": "$18649.64",
      "available": true
    },
    { "id": 63, "car_model": "LaCrosse", "car_model_year": 2011, "price": "$10705.06", "available": true },
    { "id": 64, "car_model": "Savana 1500", "car_model_year": 2008, "price": "$12818.96", "available": true },
    { "id": 65, "car_model": "F350", "car_model_year": 1995, "price": "$5360.69", "available": false },
    { "id": 66, "car_model": "6000", "car_model_year": 1985, "price": "$5339.56", "available": true },
    { "id": 67, "car_model": "Monterey", "car_model_year": 2006, "price": "$10854.78", "available": true },
    { "id": 68, "car_model": "XK Series", "car_model_year": 1999, "price": "$6780.23", "available": true },
    { "id": 69, "car_model": "Continental", "car_model_year": 2006, "price": "$16910.94", "available": false },
    { "id": 70, "car_model": "SSR", "car_model_year": 2006, "price": "$9254.14", "available": true },
    { "id": 71, "car_model": "Blazer", "car_model_year": 1995, "price": "$10367.22", "available": true },
    { "id": 72, "car_model": "300M", "car_model_year": 1999, "price": "$10255.45", "available": false },
    { "id": 73, "car_model": "Camry Hybrid", "car_model_year": 2010, "price": "$10442.24", "available": false },
    { "id": 74, "car_model": "F350", "car_model_year": 2009, "price": "$14041.12", "available": false },
    { "id": 75, "car_model": "Patriot", "car_model_year": 2009, "price": "$16239.34", "available": true },
    { "id": 76, "car_model": "Camaro", "car_model_year": 1993, "price": "$16689.70", "available": false },
    { "id": 77, "car_model": "Fifth Ave", "car_model_year": 1992, "price": "$15049.34", "available": true },
    { "id": 78, "car_model": "Caliber", "car_model_year": 2010, "price": "$7990.78", "available": true },
    { "id": 79, "car_model": "TL", "car_model_year": 2011, "price": "$5584.74", "available": false },
    { "id": 80, "car_model": "Diablo", "car_model_year": 1993, "price": "$19621.19", "available": false },
    { "id": 81, "car_model": "SC", "car_model_year": 2010, "price": "$11414.29", "available": false },
    { "id": 82, "car_model": "Vitara", "car_model_year": 2000, "price": "$14862.02", "available": true },
    { "id": 83, "car_model": "Legend", "car_model_year": 1994, "price": "$8652.70", "available": false },
    { "id": 84, "car_model": "S10 Blazer", "car_model_year": 1992, "price": "$14695.33", "available": true },
    { "id": 85, "car_model": "Cabriolet", "car_model_year": 1996, "price": "$12729.78", "available": false },
    { "id": 86, "car_model": "J", "car_model_year": 1995, "price": "$13018.40", "available": false },
    { "id": 87, "car_model": "LeMans", "car_model_year": 1965, "price": "$14326.39", "available": false },
    { "id": 88, "car_model": "Regal", "car_model_year": 1985, "price": "$10085.98", "available": true },
    { "id": 89, "car_model": "Corvette", "car_model_year": 2006, "price": "$10031.08", "available": true },
    { "id": 90, "car_model": "LTD", "car_model_year": 1984, "price": "$17684.66", "available": true },
    { "id": 91, "car_model": "M3", "car_model_year": 2004, "price": "$15513.40", "available": false },
    { "id": 92, "car_model": "Santa Fe", "car_model_year": 2011, "price": "$6737.03", "available": false },
    { "id": 93, "car_model": "Sunfire", "car_model_year": 2005, "price": "$8285.71", "available": false },
    { "id": 94, "car_model": "Escalade ESV", "car_model_year": 2005, "price": "$9746.24", "available": false },
    { "id": 95, "car_model": "E350", "car_model_year": 2004, "price": "$17850.54", "available": true },
    { "id": 96, "car_model": "Swift", "car_model_year": 1987, "price": "$7094.44", "available": false },
    { "id": 97, "car_model": "3500", "car_model_year": 1992, "price": "$14951.47", "available": false },
    { "id": 98, "car_model": "4Runner", "car_model_year": 1998, "price": "$7730.76", "available": false },
    { "id": 99, "car_model": "Aurora", "car_model_year": 1996, "price": "$6694.84", "available": false },
    { "id": 100, "car_model": "F-Series", "car_model_year": 1993, "price": "$11239.01", "available": false },
    { "id": 101, "car_model": "RX-7", "car_model_year": 1994, "price": "$9682.35", "available": false },
    { "id": 102, "car_model": "Sierra 3500", "car_model_year": 2000, "price": "$12843.18", "available": true },
    { "id": 103, "car_model": "Yukon XL 1500", "car_model_year": 2008, "price": "$11411.15", "available": false },
    { "id": 104, "car_model": "Galant", "car_model_year": 2011, "price": "$7235.68", "available": false },
    { "id": 105, "car_model": "Legacy", "car_model_year": 1998, "price": "$19818.24", "available": true },
    { "id": 106, "car_model": "V8", "car_model_year": 1994, "price": "$18871.07", "available": false },
    { "id": 107, "car_model": "Tiburon", "car_model_year": 2008, "price": "$14665.11", "available": true },
    { "id": 108, "car_model": "Esteem", "car_model_year": 2002, "price": "$19440.01", "available": true },
    { "id": 109, "car_model": "Silverado 1500", "car_model_year": 2000, "price": "$12629.33", "available": true },
    { "id": 110, "car_model": "V70", "car_model_year": 2008, "price": "$10175.39", "available": false },
    { "id": 111, "car_model": "Accent", "car_model_year": 2008, "price": "$11750.98", "available": false },
    { "id": 112, "car_model": "Tiburon", "car_model_year": 2008, "price": "$16067.25", "available": true },
    { "id": 113, "car_model": "A6", "car_model_year": 2010, "price": "$8057.93", "available": false },
    { "id": 114, "car_model": "Q7", "car_model_year": 2010, "price": "$9146.42", "available": false },
    { "id": 115, "car_model": "S10", "car_model_year": 1992, "price": "$16812.06", "available": false },
    { "id": 116, "car_model": "4Runner", "car_model_year": 2002, "price": "$14184.77", "available": false },
    { "id": 117, "car_model": "Focus", "car_model_year": 2004, "price": "$18117.50", "available": false },
    { "id": 118, "car_model": "X6", "car_model_year": 2013, "price": "$10454.47", "available": true },
    { "id": 119, "car_model": "Vantage", "car_model_year": 2008, "price": "$5484.16", "available": false },
    { "id": 120, "car_model": "Continental", "car_model_year": 1997, "price": "$12403.19", "available": false },
    { "id": 121, "car_model": "E-Series", "car_model_year": 2012, "price": "$11059.66", "available": true },
    { "id": 122, "car_model": "Safari", "car_model_year": 1993, "price": "$6538.20", "available": true },
    { "id": 123, "car_model": "600SL", "car_model_year": 1993, "price": "$8227.37", "available": true },
    { "id": 124, "car_model": "ES", "car_model_year": 1991, "price": "$15472.21", "available": true },
    {
      "id": 125,
      "car_model": "Ram Wagon B150",
      "car_model_year": 1992,
      "price": "$15037.27",
      "available": false
    },
    { "id": 126, "car_model": "62", "car_model_year": 2005, "price": "$7275.15", "available": true },
    { "id": 127, "car_model": "X-Type", "car_model_year": 2006, "price": "$11174.80", "available": true },
    { "id": 128, "car_model": "A4", "car_model_year": 1996, "price": "$17310.15", "available": true },
    { "id": 129, "car_model": "E-Series", "car_model_year": 1985, "price": "$9293.25", "available": false },
    { "id": 130, "car_model": "DBS", "car_model_year": 2009, "price": "$11699.88", "available": false },
    { "id": 131, "car_model": "C-Class", "car_model_year": 1999, "price": "$5652.93", "available": false },
    {
      "id": 132,
      "car_model": "Range Rover Sport",
      "car_model_year": 2009,
      "price": "$19847.05",
      "available": false
    },
    { "id": 133, "car_model": "Celica", "car_model_year": 1997, "price": "$12428.69", "available": true },
    { "id": 134, "car_model": "Seville", "car_model_year": 1996, "price": "$11602.67", "available": false },
    {
      "id": 135,
      "car_model": "Silverado Hybrid",
      "car_model_year": 2006,
      "price": "$6178.20",
      "available": false
    },
    { "id": 136, "car_model": "Tahoe", "car_model_year": 2010, "price": "$18566.88", "available": false },
    {
      "id": 137,
      "car_model": "Econoline E150",
      "car_model_year": 1998,
      "price": "$15954.54",
      "available": false
    },
    { "id": 138, "car_model": "SLR McLaren", "car_model_year": 2007, "price": "$14039.02", "available": true },
    { "id": 139, "car_model": "SX4", "car_model_year": 2007, "price": "$10144.47", "available": true },
    { "id": 140, "car_model": "Courier", "car_model_year": 1986, "price": "$17581.33", "available": false },
    { "id": 141, "car_model": "Focus", "car_model_year": 2003, "price": "$14843.59", "available": false },
    { "id": 142, "car_model": "Accord", "car_model_year": 2000, "price": "$12184.04", "available": true },
    { "id": 143, "car_model": "MPV", "car_model_year": 2000, "price": "$19595.89", "available": false },
    { "id": 144, "car_model": "Routan", "car_model_year": 2011, "price": "$9016.97", "available": true },
    { "id": 145, "car_model": "3000GT", "car_model_year": 1993, "price": "$8851.96", "available": true },
    { "id": 146, "car_model": "5 Series", "car_model_year": 1993, "price": "$8419.30", "available": false },
    { "id": 147, "car_model": "V70", "car_model_year": 2003, "price": "$12178.16", "available": true },
    { "id": 148, "car_model": "Ciera", "car_model_year": 1996, "price": "$10395.19", "available": true },
    { "id": 149, "car_model": "Sephia", "car_model_year": 1998, "price": "$5962.65", "available": true },
    { "id": 150, "car_model": "XC70", "car_model_year": 2007, "price": "$14511.70", "available": true },
    { "id": 151, "car_model": "Murciélago", "car_model_year": 2010, "price": "$7184.98", "available": true },
    { "id": 152, "car_model": "Dakota Club", "car_model_year": 2001, "price": "$7818.51", "available": false },
    { "id": 153, "car_model": "300TE", "car_model_year": 1993, "price": "$11259.68", "available": false },
    { "id": 154, "car_model": "Mazda6", "car_model_year": 2009, "price": "$7487.74", "available": true },
    { "id": 155, "car_model": "Golf", "car_model_year": 1983, "price": "$13085.81", "available": true },
    { "id": 156, "car_model": "Colt", "car_model_year": 1994, "price": "$18456.14", "available": true },
    { "id": 157, "car_model": "Cavalier", "car_model_year": 2003, "price": "$8253.57", "available": false },
    { "id": 158, "car_model": "Camaro", "car_model_year": 1998, "price": "$19247.16", "available": true },
    { "id": 159, "car_model": "Millenia", "car_model_year": 1997, "price": "$6851.54", "available": false },
    { "id": 160, "car_model": "Enclave", "car_model_year": 2011, "price": "$7968.80", "available": false },
    { "id": 161, "car_model": "Land Cruiser", "car_model_year": 1992, "price": "$13956.94", "available": false },
    { "id": 162, "car_model": "H1", "car_model_year": 1999, "price": "$5886.15", "available": true },
    { "id": 163, "car_model": "Grand Am", "car_model_year": 1994, "price": "$5309.27", "available": true },
    { "id": 164, "car_model": "S-Series", "car_model_year": 1997, "price": "$14583.90", "available": true },
    { "id": 165, "car_model": "Impala", "car_model_year": 2004, "price": "$8206.56", "available": true },
    { "id": 166, "car_model": "5 Series", "car_model_year": 2010, "price": "$15436.31", "available": true },
    { "id": 167, "car_model": "G-Class", "car_model_year": 2005, "price": "$15517.18", "available": false },
    { "id": 168, "car_model": "7 Series", "car_model_year": 1996, "price": "$7051.42", "available": true },
    { "id": 169, "car_model": "Golf", "car_model_year": 1996, "price": "$11434.27", "available": false },
    { "id": 170, "car_model": "760", "car_model_year": 2005, "price": "$16391.31", "available": false },
    { "id": 171, "car_model": "Murano", "car_model_year": 2006, "price": "$17295.40", "available": false },
    { "id": 172, "car_model": "MX-5", "car_model_year": 1992, "price": "$14195.60", "available": true },
    { "id": 173, "car_model": "Sierra 3500HD", "car_model_year": 2006, "price": "$6647.96", "available": false },
    { "id": 174, "car_model": "Quest", "car_model_year": 2007, "price": "$19277.62", "available": true },
    {
      "id": 175,
      "car_model": "F-Series Super Duty",
      "car_model_year": 2008,
      "price": "$9205.17",
      "available": true
    },
    { "id": 176, "car_model": "Cherokee", "car_model_year": 1993, "price": "$9615.21", "available": false },
    { "id": 177, "car_model": "A4", "car_model_year": 2007, "price": "$7206.76", "available": false },
    {
      "id": 178,
      "car_model": "Ram Wagon B350",
      "car_model_year": 1992,
      "price": "$16349.74",
      "available": false
    },
    { "id": 179, "car_model": "LHS", "car_model_year": 1997, "price": "$15651.07", "available": false },
    { "id": 180, "car_model": "Ram Van 3500", "car_model_year": 1995, "price": "$11765.64", "available": true },
    {
      "id": 181,
      "car_model": "3500 Club Coupe",
      "car_model_year": 1993,
      "price": "$17316.29",
      "available": true
    },
    { "id": 182, "car_model": "Grand Prix", "car_model_year": 1983, "price": "$19424.28", "available": false },
    { "id": 183, "car_model": "XC60", "car_model_year": 2010, "price": "$13756.21", "available": false },
    { "id": 184, "car_model": "Accord", "car_model_year": 2000, "price": "$12956.30", "available": true },
    { "id": 185, "car_model": "7 Series", "car_model_year": 2002, "price": "$12810.28", "available": false },
    { "id": 186, "car_model": "Corvette", "car_model_year": 1962, "price": "$9079.85", "available": false },
    { "id": 187, "car_model": "Tacoma Xtra", "car_model_year": 2001, "price": "$8422.02", "available": false },
    { "id": 188, "car_model": "Milan", "car_model_year": 2006, "price": "$12378.65", "available": true },
    { "id": 189, "car_model": "SX4", "car_model_year": 2009, "price": "$19573.14", "available": true },
    { "id": 190, "car_model": "645", "car_model_year": 2004, "price": "$15825.94", "available": false },
    { "id": 191, "car_model": "SL-Class", "car_model_year": 1990, "price": "$15276.26", "available": false },
    {
      "id": 192,
      "car_model": "LTD Crown Victoria",
      "car_model_year": 1987,
      "price": "$16245.64",
      "available": false
    },
    { "id": 193, "car_model": "Celica", "car_model_year": 1997, "price": "$13511.07", "available": false },
    { "id": 194, "car_model": "Crossfire", "car_model_year": 2008, "price": "$13986.25", "available": false },
    { "id": 195, "car_model": "Beetle", "car_model_year": 1965, "price": "$9438.91", "available": true },
    { "id": 196, "car_model": "5 Series", "car_model_year": 2001, "price": "$17072.11", "available": true },
    { "id": 197, "car_model": "Sable", "car_model_year": 1993, "price": "$18915.66", "available": false },
    { "id": 198, "car_model": "Z8", "car_model_year": 2003, "price": "$18712.55", "available": false },
    { "id": 199, "car_model": "Explorer", "car_model_year": 1993, "price": "$5494.77", "available": true },
    { "id": 200, "car_model": "riolet", "car_model_year": 1996, "price": "$15135.05", "available": false },
    { "id": 201, "car_model": "Prelude", "car_model_year": 1993, "price": "$16277.09", "available": false },
    {
      "id": 202,
      "car_model": "Range Rover Sport",
      "car_model_year": 2010,
      "price": "$11544.54",
      "available": false
    },
    { "id": 203, "car_model": "CR-V", "car_model_year": 1998, "price": "$5771.97", "available": true },
    { "id": 204, "car_model": "Armada", "car_model_year": 2005, "price": "$14041.88", "available": true },
    { "id": 205, "car_model": "Grand Caravan", "car_model_year": 1999, "price": "$11512.41", "available": true },
    { "id": 206, "car_model": "XL-7", "car_model_year": 2008, "price": "$7389.02", "available": false },
    { "id": 207, "car_model": "Probe", "car_model_year": 1996, "price": "$14802.28", "available": true },
    { "id": 208, "car_model": "4Runner", "car_model_year": 2005, "price": "$6367.03", "available": true },
    { "id": 209, "car_model": "Econoline E350", "car_model_year": 1993, "price": "$6344.43", "available": false },
    { "id": 210, "car_model": "Pajero", "car_model_year": 2004, "price": "$6861.74", "available": false },
    { "id": 211, "car_model": "Tahoe", "car_model_year": 1995, "price": "$10467.36", "available": true },
    {
      "id": 212,
      "car_model": "Ram Wagon B350",
      "car_model_year": 1993,
      "price": "$16822.66",
      "available": false
    },
    { "id": 213, "car_model": "Concorde", "car_model_year": 1993, "price": "$9499.11", "available": false },
    { "id": 214, "car_model": "G25", "car_model_year": 2011, "price": "$18837.15", "available": false },
    { "id": 215, "car_model": "Capri", "car_model_year": 1984, "price": "$19095.30", "available": false },
    { "id": 216, "car_model": "Viper", "car_model_year": 2000, "price": "$14434.83", "available": true },
    { "id": 217, "car_model": "Catera", "car_model_year": 1999, "price": "$16234.84", "available": false },
    { "id": 218, "car_model": "Canyon", "car_model_year": 2012, "price": "$16790.78", "available": false },
    { "id": 219, "car_model": "Tercel", "car_model_year": 1992, "price": "$15035.62", "available": true },
    { "id": 220, "car_model": "S4", "car_model_year": 2013, "price": "$13917.33", "available": true },
    { "id": 221, "car_model": "Touareg", "car_model_year": 2008, "price": "$5587.52", "available": true },
    {
      "id": 222,
      "car_model": "Rally Wagon 2500",
      "car_model_year": 1993,
      "price": "$12055.03",
      "available": false
    },
    { "id": 223, "car_model": "PT Cruiser", "car_model_year": 2007, "price": "$5205.47", "available": false },
    { "id": 224, "car_model": "Yukon XL 1500", "car_model_year": 2000, "price": "$13823.61", "available": true },
    { "id": 225, "car_model": "Corvette", "car_model_year": 1956, "price": "$12407.75", "available": true },
    { "id": 226, "car_model": "Golf III", "car_model_year": 1994, "price": "$17718.47", "available": false },
    { "id": 227, "car_model": "XC70", "car_model_year": 2005, "price": "$11072.77", "available": true },
    { "id": 228, "car_model": "Ram Van B250", "car_model_year": 1992, "price": "$10330.97", "available": true },
    { "id": 229, "car_model": "G37", "car_model_year": 2012, "price": "$5659.82", "available": true },
    { "id": 230, "car_model": "SC", "car_model_year": 1993, "price": "$6233.20", "available": false },
    { "id": 231, "car_model": "M5", "car_model_year": 2002, "price": "$13557.44", "available": true },
    { "id": 232, "car_model": "Montero Sport", "car_model_year": 1997, "price": "$5047.03", "available": true },
    { "id": 233, "car_model": "F150", "car_model_year": 2000, "price": "$8663.96", "available": true },
    { "id": 234, "car_model": "MKX", "car_model_year": 2007, "price": "$16181.84", "available": true },
    { "id": 235, "car_model": "Aurora", "car_model_year": 2003, "price": "$17144.58", "available": true },
    { "id": 236, "car_model": "A4", "car_model_year": 2000, "price": "$6877.29", "available": false },
    { "id": 237, "car_model": "Camry Hybrid", "car_model_year": 2007, "price": "$18485.76", "available": true },
    { "id": 238, "car_model": "Club Wagon", "car_model_year": 1994, "price": "$19255.25", "available": true },
    { "id": 239, "car_model": "C70", "car_model_year": 2010, "price": "$10996.53", "available": true },
    { "id": 240, "car_model": "Firefly", "car_model_year": 1986, "price": "$12288.09", "available": true },
    { "id": 241, "car_model": "Mustang", "car_model_year": 2011, "price": "$12918.47", "available": true },
    { "id": 242, "car_model": "M", "car_model_year": 2002, "price": "$13058.03", "available": true },
    { "id": 243, "car_model": "Club Wagon", "car_model_year": 1995, "price": "$12174.73", "available": true },
    { "id": 244, "car_model": "Sierra 2500", "car_model_year": 2005, "price": "$16196.63", "available": true },
    { "id": 245, "car_model": "9-2X", "car_model_year": 2006, "price": "$5560.38", "available": true },
    { "id": 246, "car_model": "Accord", "car_model_year": 1997, "price": "$13502.49", "available": true },
    { "id": 247, "car_model": "Mighty Max", "car_model_year": 1996, "price": "$5581.49", "available": true },
    { "id": 248, "car_model": "Ram 1500", "car_model_year": 2006, "price": "$12571.39", "available": false },
    { "id": 249, "car_model": "911", "car_model_year": 2002, "price": "$5995.77", "available": false },
    { "id": 250, "car_model": "626", "car_model_year": 1995, "price": "$8292.18", "available": false },
    { "id": 251, "car_model": "Galant", "car_model_year": 2011, "price": "$5563.11", "available": true },
    { "id": 252, "car_model": "Allroad", "car_model_year": 2004, "price": "$13784.33", "available": true },
    { "id": 253, "car_model": "Bronco", "car_model_year": 1996, "price": "$17683.03", "available": false },
    { "id": 254, "car_model": "Laser", "car_model_year": 1993, "price": "$10098.11", "available": true },
    { "id": 255, "car_model": "Envoy", "car_model_year": 1999, "price": "$7945.11", "available": false },
    { "id": 256, "car_model": "Firebird", "car_model_year": 1993, "price": "$17807.25", "available": true },
    { "id": 257, "car_model": "Grand Prix", "car_model_year": 1988, "price": "$19257.24", "available": false },
    { "id": 258, "car_model": "Integra", "car_model_year": 2001, "price": "$7553.35", "available": true },
    { "id": 259, "car_model": "62", "car_model_year": 2009, "price": "$10461.67", "available": false },
    { "id": 260, "car_model": "98", "car_model_year": 1992, "price": "$9952.66", "available": true },
    { "id": 261, "car_model": "Vigor", "car_model_year": 1992, "price": "$16120.60", "available": true },
    { "id": 262, "car_model": "Mountaineer", "car_model_year": 2005, "price": "$12901.78", "available": true },
    { "id": 263, "car_model": "D250", "car_model_year": 1993, "price": "$16754.33", "available": true },
    { "id": 264, "car_model": "Enclave", "car_model_year": 2008, "price": "$8569.28", "available": true },
    { "id": 265, "car_model": "TL", "car_model_year": 2007, "price": "$19661.46", "available": false },
    { "id": 266, "car_model": "Viper", "car_model_year": 1996, "price": "$14087.47", "available": true },
    { "id": 267, "car_model": "Ranger", "car_model_year": 2002, "price": "$8632.40", "available": true },
    { "id": 268, "car_model": "S6", "car_model_year": 2007, "price": "$16530.39", "available": false },
    { "id": 269, "car_model": "Monte Carlo", "car_model_year": 1998, "price": "$15371.85", "available": true },
    { "id": 270, "car_model": "C-Class", "car_model_year": 2001, "price": "$19000.83", "available": false },
    { "id": 271, "car_model": "Acadia", "car_model_year": 2007, "price": "$7837.97", "available": false },
    {
      "id": 272,
      "car_model": "Grand Cherokee",
      "car_model_year": 2005,
      "price": "$16815.33",
      "available": false
    },
    { "id": 273, "car_model": "8 Series", "car_model_year": 1994, "price": "$6824.37", "available": true },
    { "id": 274, "car_model": "S6", "car_model_year": 2010, "price": "$13356.73", "available": true },
    { "id": 275, "car_model": "S4", "car_model_year": 2004, "price": "$17472.55", "available": true },
    { "id": 276, "car_model": "Avalanche", "car_model_year": 2008, "price": "$11414.19", "available": true },
    { "id": 277, "car_model": "Vantage", "car_model_year": 2007, "price": "$11768.47", "available": false },
    { "id": 278, "car_model": "Corvette", "car_model_year": 1985, "price": "$13693.90", "available": false },
    { "id": 279, "car_model": "Cougar", "car_model_year": 1996, "price": "$5850.80", "available": false },
    { "id": 280, "car_model": "Bonneville", "car_model_year": 1994, "price": "$6990.17", "available": true },
    { "id": 281, "car_model": "H1", "car_model_year": 1994, "price": "$8614.33", "available": false },
    { "id": 282, "car_model": "Excel", "car_model_year": 1993, "price": "$10116.78", "available": false },
    { "id": 283, "car_model": "Mark LT", "car_model_year": 2007, "price": "$13746.12", "available": true },
    { "id": 284, "car_model": "Yukon XL 2500", "car_model_year": 2004, "price": "$7943.84", "available": false },
    { "id": 285, "car_model": "Swift", "car_model_year": 2000, "price": "$10465.99", "available": false },
    { "id": 286, "car_model": "Fairlane", "car_model_year": 1967, "price": "$7376.82", "available": false },
    { "id": 287, "car_model": "Ram 2500", "car_model_year": 1995, "price": "$5096.90", "available": false },
    { "id": 288, "car_model": "Rockette", "car_model_year": 1960, "price": "$15042.78", "available": true },
    { "id": 289, "car_model": "Pathfinder", "car_model_year": 1994, "price": "$15321.85", "available": false },
    { "id": 290, "car_model": "Mirage", "car_model_year": 1991, "price": "$18973.15", "available": true },
    {
      "id": 291,
      "car_model": "Avalanche 1500",
      "car_model_year": 2005,
      "price": "$17153.39",
      "available": false
    },
    { "id": 292, "car_model": "Insight", "car_model_year": 2012, "price": "$18532.69", "available": true },
    { "id": 293, "car_model": "G-Series 1500", "car_model_year": 1996, "price": "$11843.62", "available": true },
    { "id": 294, "car_model": "Cooper", "car_model_year": 2010, "price": "$17747.53", "available": true },
    { "id": 295, "car_model": "Sequoia", "car_model_year": 2001, "price": "$8004.49", "available": false },
    {
      "id": 296,
      "car_model": "Econoline E150",
      "car_model_year": 2001,
      "price": "$15192.16",
      "available": false
    },
    { "id": 297, "car_model": "Wrangler", "car_model_year": 2002, "price": "$14217.80", "available": true },
    { "id": 298, "car_model": "V70", "car_model_year": 2000, "price": "$8861.81", "available": false },
    { "id": 299, "car_model": "Countryman", "car_model_year": 2011, "price": "$12588.91", "available": true },
    { "id": 300, "car_model": "Firefly", "car_model_year": 1989, "price": "$5237.33", "available": true }
  ],
    filter: filters()
  },
  //mutations to alter the info
  mutations: {
    //data contains 2 keys: filter (refers to any filter (query, from...)) and value (value that we wanna apply in that filter)
    setFilter(state, data) {
      state.filter[data['filter']] = data.value;
    },
    resetFilter(state) {
      state.filter = filters();
    }
  },
  getters: {
    filteredCars(state) {
      let cars = state.cars;

      cars = cars.filter(car => car.available === state.filter.available);

      if (state.filter.query.length >= 1) {
        cars = cars.filter(car => car.car_model.includes(state.filter.query));
      }

      if (state.filter.from) {
        cars = cars.filter(car => car.car_model_year >= state.filter.from);
      }

      if (state.filter.to) {
        cars = cars.filter(car => car.car_model_year <= state.filter.to);
      }

      if (state.filter.min_price) {
        cars = cars.filter(car => {
          const price = parseFloat(car.price.replace('$', ''));
          return price >= state.filter.min_price;
        })
      }

      if (state.filter.max_price) {
        cars = cars.filter(car => {
          const price = parseFloat(car.price.replace('$', ''));
          return price <= state.filter.max_price;
        })
      }

      return cars;
    }
  },
  actions: {
  },
  modules: {
  }
})
