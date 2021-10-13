import React from "react";
import { useFormik } from "formik";
import { useCityName } from "../context/CityContext";
function Dropdown() {
  const { cityName, setCityName } = useCityName();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { city: cityName },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="city" value={values.city} onChange={handleChange}>
          <option value="Adana,TR">Adana</option>
          <option value="Adıyaman,TR">Adıyaman</option>
          <option value="Afyonkarahisar,TR">Afyonkarahisar</option>
          <option value="Ağrı,TR">Ağrı</option>
          <option value="Amasya,TR">Amasya</option>
          <option value="Ankara,TR">Ankara</option>
          <option value="Antalya,TR">Antalya</option>
          <option value="Artvin,TR">Artvin</option>
          <option value="Aydın,TR">Aydın</option>
          <option value="Balıkesir,TR">Balıkesir</option>
          <option value="Bilecik,TR">Bilecik</option>
          <option value="Bingöl,TR">Bingöl</option>
          <option value="Bitlis,TR">Bitlis</option>
          <option value="Bolu,TR">Bolu</option>
          <option value="Burdur,TR">Burdur</option>
          <option value="Bursa,TR">Bursa</option>
          <option value="Çanakkale,TR">Çanakkale</option>
          <option value="Çankırı,TR">Çankırı</option>
          <option value="Çorum,TR">Çorum</option>
          <option value="Denizli,TR">Denizli</option>
          <option value="Diyarbakır,TR">Diyarbakır</option>
          <option value="Edirne,TR">Edirne</option>
          <option value="Elazığ,TR">Elazığ</option>
          <option value="Erzincan,TR">Erzincan</option>
          <option value="Erzurum,TR">Erzurum</option>
          <option value="Eskişehir,TR">Eskişehir</option>
          <option value="Gaziantep,TR">Gaziantep</option>
          <option value="Giresun,TR">Giresun</option>
          <option value="Gümüşhane,TR">Gümüşhane</option>
          <option value="Hakkâri,TR">Hakkâri</option>
          <option value="Hatay,TR">Hatay</option>
          <option value="Isparta,TR">Isparta</option>
          <option value="Mersin,TR">Mersin</option>
          <option value="İstanbul,TR">İstanbul</option>
          <option value="İzmir,TR">İzmir</option>
          <option value="Kars,TR">Kars</option>
          <option value="Kastamonu,TR">Kastamonu</option>
          <option value="Kayseri,TR">Kayseri</option>
          <option value="Kırklareli,TR">Kırklareli</option>
          <option value="Kırşehir,TR">Kırşehir</option>
          <option value="Kocaeli,TR">Kocaeli</option>
          <option value="Konya,TR">Konya</option>
          <option value="Kütahya,TR">Kütahya</option>
          <option value="Malatya,TR">Malatya</option>
          <option value="Manisa,TR">Manisa</option>
          <option value="Kahramanmaraş,TR">Kahramanmaraş</option>
          <option value="Mardin,TR">Mardin</option>
          <option value="Muğla,TR">Muğla</option>
          <option value="Muş,TR">Muş</option>
          <option value="Nevşehir,TR">Nevşehir</option>
          <option value="Niğde,TR">Niğde</option>
          <option value="Ordu,TR">Ordu</option>
          <option value="Rize,TR">Rize</option>
          <option value="Sakarya,TR">Sakarya</option>
          <option value="Samsun,TR">Samsun</option>
          <option value="Siirt,TR">Siirt</option>
          <option value="Sinop,TR">Sinop</option>
          <option value="Sivas,TR">Sivas</option>
          <option value="Tekirdağ,TR">Tekirdağ</option>
          <option value="Tokat,TR">Tokat</option>
          <option value="Trabzon,TR">Trabzon</option>
          <option value="Tunceli,TR">Tunceli</option>
          <option value="Şanlıurfa,TR">Şanlıurfa</option>
          <option value="Uşak,TR">Uşak</option>
          <option value="Van,TR">Van</option>
          <option value="Yozgat,TR">Yozgat</option>
          <option value="Zonguldak,TR">Zonguldak</option>
          <option value="Aksaray,TR">Aksaray</option>
          <option value="Bayburt,TR">Bayburt</option>
          <option value="Karaman,TR">Karaman</option>
          <option value="Kırıkkale,TR">Kırıkkale</option>
          <option value="Batman,TR">Batman</option>
          <option value="Şırnak,TR">Şırnak</option>
          <option value="Bartın,TR">Bartın</option>
          <option value="Ardahan,TR">Ardahan</option>
          <option value="Iğdır,TR">Iğdır</option>
          <option value="Yalova,TR">Yalova</option>
          <option value="Karabük,TR">Karabük</option>
          <option value="Kilis,TR">Kilis</option>
          <option value="Osmaniye,TR">Osmaniye</option>
          <option value="Düzce,TR">Düzce</option>
        </select>
        {setCityName(values.city)}
      </form>
    </div>
  );
}

export default Dropdown;
