function pieceOfPie(pieArr, ...pieFlavours) {
    indexOfFirstPie = pieArr.indexOf(pieFlavours[0]);
    indexofSecondPie = pieArr.indexOf(pieFlavours[1]);

    let result = pieArr.slice(indexOfFirstPie, indexofSecondPie + 1);
    return result;
 
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)