export function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5 ) - hash + char;
        hash = hash | 0;
    }
    return hash;
}

export function getConferenceDateString() {
    const formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Los_Angeles',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return formatter.format(new Date());
}

export function mulberry32(seed) {
    return function() {
        seed |= 0;
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15),1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}


export function randomInRange(rng, min, max) {
    return min + rng() * (max - min);
}

export function shuffler(rng, array){
    for (let i = array.length - 1; i >= 1; i--)  {
        const temp = array[i];
        const j = Math.floor(randomInRange(rng, 0, i));
        array[i] = array[j];
        array[j] = temp
    }
    return array
}

