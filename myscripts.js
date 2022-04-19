//PARAMETRESIZ FONKSIYON
        function selamVer(){
            document.write("Selam, naber <br>");
        }

        selamVer();
        
        //1 PARAMETRELI FONKSIYON
        function selamVer2(isim){
            document.write(isim + "'e selam!<br>");
        }

        selamVer2("Ahmet");

        //COK PARAMETRELI FONKSIYON
        function selamVer3(isim1,isim2){
            document.write(isim1 + " ve "+isim2+ ", nasılsınız? <br>");
        }
        selamVer3("Ahmet","Mehmet")

        //DEGER DONDUREN FONKSIYON
        function carp(sayi1,sayi2){
            return sayi1*sayi2;
        }
        document.write(carp(5,6));
        console.log(carp(5,6))