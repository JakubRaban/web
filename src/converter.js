/*

spec:
{
    unit,
    particle,
}

 */

import {units} from "./units";

const MULTIPLICATION_IDENTITY = 1;

export const convertBetweenUnits = (quantity, oldSpec, newSpec) => {
    const { unit: oldUnit, particle: oldParticle } = oldSpec;
    const { unit: newUnit, particle: newParticle } = newSpec;
    if (oldUnit !== newUnit) {
        let conversion = 1;
        const unitValues = units[quantity];
        const [oldUnitNominator, oldUnitDenominator] = oldUnit.split('/');
        const [newUnitNominator, newUnitDenominator] = newUnit.split('/');
        if (oldUnitNominator !== newUnitNominator)
            conversion *= unitValues[newUnitNominator] / unitValues[oldUnitNominator];
        if (!oldUnitDenominator && newUnitDenominator === 'u')
            conversion /= particleMasses[newParticle];
        if (oldUnitDenominator === 'u' && !newUnitDenominator)
            conversion *= particleMasses[newParticle];
        return conversion;
    }
    if (oldParticle !== newParticle) {
        if (!oldUnit.endsWith('/u')) return MULTIPLICATION_IDENTITY;
        return particleMasses[oldParticle] / particleMasses[newParticle];
    }
    return MULTIPLICATION_IDENTITY;
}

//BEFORE: energy[KeV/u] = 5000, particle = Alpha
//AFTER: particle = Beta

const particleMasses = {
    '1001': 1,
    '2004': 4,
}
