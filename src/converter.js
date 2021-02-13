const convert = (wielkość, oldUnitSpec, newUnitSpec) => {
    oldUnitSpec = {
        unit: 'MeV',
        particle: 'proton',
    };
    newUnitSpec = {
        unit: 'MeV/u',
        particle: 'proton'
    }
    if (newUnitSpec.unit === 'xd') {
        return proton.mass
    }
}
