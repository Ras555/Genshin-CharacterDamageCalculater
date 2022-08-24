function calculateDamage()
{
    const reactions = document.getElementsByClassName("reaction");
    for(let i = 0; i < reactions.length; i++)
    {
        reactions[i].style.display = "none";
    }

    const elem = document.getElementById("element").value;
    const level = document.getElementById("level").value;
    const atk = document.getElementById("attack").value;
    const critR = document.getElementById("critRate").value;
    const critD = document.getElementById("critDmg").value;
    const elemBonus = document.getElementById("eleBonus").value;
    const physBonus = document.getElementById("physBonus").value;
    const mastery = document.getElementById("mastery").value;

    const levelMultiplier = [17.17, 18.54, 19.9, 21.27, 22.65, 24.65, 26.64, 28.87, 31.37, 34.14, 37.2, 40.66,
        44.45,  48.56, 53.75, 59.08, 64.42, 69.72, 75.12, 80.58, 86.11, 91.7, 97.24, 102.81, 108.41, 113.2,
        118.1, 122.98, 129.73, 136.29, 142.67, 149.03, 155.42, 161.83, 169.11, 176.52, 184.07, 191.71, 199.56,
        207.38, 215.4, 224.17, 233.5, 243.35, 256.06, 268.54, 281.53, 295.01, 309.07, 323.6, 336.76, 350.53,
        364.48, 378.62, 398.6, 416.4, 434.39, 452.95, 472.61, 492.88, 513.57, 539.1, 565.51, 592.54, 624.44, 
        651.47, 679.5, 707.79, 736.67, 765.64, 794.77, 824.68, 851.16, 877.74, 914.23, 946.75, 979.41, 1011.22,
        1044.79, 1077.44, 1110, 1142.98, 1176.37, 1210.18, 1253.84, 1288.95, 1325.48, 1363.46, 1405.1, 1446.85,
        1488.22, 1528.44, 1580.37, 1630.85, 1711.2, 1780.45, 1847.32, 1911.47, 1972.86, 2030.07];

    //Normal and Elemental Damage Calculations
    const physDmg = atk * (1 + physBonus/100);
    document.getElementById("normDmg").innerHTML = physDmg;
    const critDmg = physDmg * (1 + critD/100);
    document.getElementById("critDmgValue").innerHTML = critDmg;
    const avgDmg = physDmg * (1 + (critR/100 * critD/100));
    document.getElementById("avgDmgValue").innerHTML = avgDmg;
    const elemDmg = atk * (1 + elemBonus/100) * (1+(critR/100 * critD/100));
    document.getElementById("elemDmgValue").innerHTML = elemDmg;


    //Reaction Calculations

    var ampEMBonus = 2.78 * (mastery/(mastery + 1400));
    var transEMBonus = 16 * (mastery/(mastery + 2000));

    if(elem == "Anemo")
    {
        var swirlDmg = 0.6 * levelMultiplier[level-1] * (1 + transEMBonus);
        document.getElementById("swirl").style.display = "block";
        document.getElementById("swirlDmg").innerHTML = swirlDmg;
    }
    else if(elem == "Cryo")
    {
        var superCondDmg = 0.5 * levelMultiplier[level-1] * (1 + transEMBonus);
        superCondDmg = superCondDmg.toFixed(0);
        var meltDmg = elemDmg * 1.5 * (1 + ampEMBonus);
        meltDmg = meltDmg.toFixed(0);
        var totalSC = Number(superCondDmg) + Number(elemDmg);

        document.getElementById("superCon").style.display = "block";
        document.getElementById("supConDmg").innerHTML = superCondDmg  + " (Total: " + totalSC + ")";
        document.getElementById("melt").style.display = "block";
        document.getElementById("meltDmg").innerHTML = meltDmg;
    }
    else if(elem == "Electro")
    {
        var overloadDmg = 2 * levelMultiplier[level-1] * (1 + transEMBonus);
        var electCharged = 1.2 * levelMultiplier[level-1] * (1 + transEMBonus);
        var superCondDmg = 0.5 * levelMultiplier[level-1] * (1 + transEMBonus);

        document.getElementById("over").style.display = "block";
        document.getElementById("overDmg").innerHTML = overloadDmg;
        document.getElementById("elecCharged").style.display = "block";
        document.getElementById("elecChargedDmg").innerHTML = electCharged;
        document.getElementById("superCond").style.display = "block";
        document.getElementById("superCondDmg").innerHTML = superCondDmg;
    }
    else if(elem == "Hydro")
    {
        var electChargedDMG = 1.2 * levelMultiplier[level-1] * (1 + transEMBonus);
        var vapDmg = 2.0 * (1 + ampEMBonus);

        document.getElementById("elecCharged").style.display = "block";
        document.getElementById("elecChargedDmg").innerHTML = electChargedDmg;
        document.getElementById("vap").style.display = "block";
        document.getElementById("vapDmg").innerHTML = vapDmg;
    }
    else if(elem == "Pyro")
    {
        var overloadDmg = 2 * levelMultiplier[level-1] * (1 + transEMBonus);
        var meltDmg = 2.0 * (1 + ampEMBonus);
        var vapDmg = 1.5 * (1 + ampEMBonus);

        document.getElementById("over").style.display = "block";
        document.getElementById("overDmg").innerHTML = overloadDmg;
        document.getElementById("melt").style.display = "block";
        document.getElementById("meltDmg").innerHTML = meltDmg;
        document.getElementById("vap").style.display = "block";
        document.getElementById("vapDmg").innerHTML = vapDmg;
    }
}

function test()
{
    document.getElementById("CharacterDamage").style.display = "inline-block";
    document.getElementById("normDmg").innerHTML = "Working...";
    const reactions = document.getElementsByClassName("reaction");
    var length = reactions.length;
    document.getElementById("critDmgValue").innerHTML = "Reactions: " + length;
    for(let i = 0; i < length; i++)
    {
        reactions[i].style.display = "none";
    }
}

function changeElemDmg()
{
    var x = document.getElementById("element").value;
    document.getElementById("eleLabel").innerHTML = x + " Damage Bonus:";
}