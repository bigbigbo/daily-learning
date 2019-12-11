/* eslint-disable no-plusplus */
export default function findItem(areaCode, data) {
  const result = {};
  for (let p = 0; p < data.length; p++) {
    const province = data[p];
    const { children: provinceChildren, ...provinceProps } = province;

    if (province.value === areaCode) {

      result.province = provinceProps;
      return result;
    }

    if (provinceChildren && provinceChildren.length > 0) {
      for (let c = 0; c < provinceChildren.length; c++) {
        const city = provinceChildren[c];
        const { children: cityChildren, ...cityProps } = city;

        if (city.value === areaCode) {
          result.province = provinceProps;
          result.city = cityProps;
          return result;
        }


        if (cityChildren && cityChildren.length > 0) {
          for (let a = 0; a < cityChildren.length; a++) {
            const area = cityChildren[a];
            if (area.value === areaCode) {
              result.province = provinceProps;
              result.city = cityProps;
              result.area = area;

              return result;
            }
          }
        }
      }
    }
  }

  return { province: null, city: null, area: null };
}