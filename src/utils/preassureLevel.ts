const preassureLevel = (systolic: number, dystolic: number) => {
    if (systolic >= 18 && dystolic >= 11) {
      return 'critical';
    } else if (systolic >= 14 && dystolic >= 9) {
      return 'high';
    } else if (systolic <= 10 && dystolic <= 7) {
      return 'low';
    } else return 'normal'
  };
  
  export default preassureLevel;