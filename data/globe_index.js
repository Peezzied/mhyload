const promo = [
    {
        id: 1,
        title: 'SURF4ALL',
        price: 99,
        action: 'PURCHASE',
        action_payload: '2*[]*1*12'
    },
    {
        id: 2,
        title: 'SURF4ALL',
        price: 249,
        action: 'PURCHASE',
        action_payload: '2*[]*1*13'
    },
    {
        id: 3,
        title: 'Go5G',
        price: 99,
        action: 'PURCHASE',
        action_payload: '2*[]*1*14'
    },
    {
        id: 4,
        title: 'Go5G',
        price: 199,
        action: 'PURCHASE',
        action_payload: '2*[]*1*15'
    },
    {
        id: 5,
        title: 'Go5G',
        price: 299,
        action: 'PURCHASE',
        action_payload: '2*[]*1*16'
    },
    {
        id: 6,
        title: 'Go+',
        action: 'NEXT',
        action_payload: [
            {
                id: 1,
                title: '99',
                price: 99,
                action: 'PURCHASE',
                action_payload: '2*[]*1*3'
            },
            {
                id: 2,
                title: '129',
                price: 129,
                action: 'PURCHASE',
                action_payload: '2*[]*1*5'
            },
            {
                id: 3,
                title: '149',
                price: 149,
                action: 'PURCHASE',
                action_payload: '2*[]*1*7'
            },
            {
                id: 4,
                title: '250',
                price: 250,
                action: 'PURCHASE',
                action_payload: '2*[]*1*9'
            },
            {
                id: 5,
                title: '400',
                price: 400,
                action: 'PURCHASE',
                action_payload: '2*[]*1*11'
            }
        ]
    },
    {
        id: 7,
        title: 'Go',
        action: 'NEXT',
        action_payload: [
            {
                id: 1,
                title: '59',
                price: 59,
                action: 'PURCHASE',
                action_payload: '2*[]*1*1'
            },
            {
                id: 2,
                title: '75',
                price: 75,
                action: 'PURCHASE',
                action_payload: '2*[]*1*2'
            },
            {
                id: 3,
                title: '120',
                price: 120,
                action: 'PURCHASE',
                action_payload: '2*[]*1*4'
            },
            {
                id: 4,
                title: '140',
                price: 140,
                action: 'PURCHASE',
                action_payload: '2*[]*1*6'
            },
            {
                id: 5,
                title: '250',
                price: 250,
                action: 'PURCHASE',
                action_payload: '2*[]*1*8'
            },
            {
                id: 6,
                title: '400',
                price: 400,
                action: 'PURCHASE',
                action_payload: '2*[]*1*11'
            }
        ]
    },
]
const callntext = [
    {
        id: 1,
        title: 'GOUNLI20',
        price: 20,
        action: 'PURCHASE',
        action_payload: '2*[]*2*1'
    },
    {
        id: 2,
        title: 'GOUNLI30',
        price: 30,
        action: 'PURCHASE',
        action_payload: '2*[]*2*2'
    },
    {
        id: 3,
        title: 'GOUNLI50',
        price: 50,
        action: 'PURCHASE',
        action_payload: '2*[]*2*3'
    },
    {
        id: 4,
        title: 'GOUNLI95',
        price: 95,
        action: 'PURCHASE',
        action_payload: '2*[]*2*4'
    },
    {
        id: 5,
        title: 'GOUNLI180',
        price: 180,
        action: 'PURCHASE',
        action_payload: '2*[]*2*5'
    },
    {
        id: 6,
        title: 'GOUNLI130',
        price: 130,
        action: 'PURCHASE',
        action_payload: '2*[]*2*6'
    }
]

export const globeIndex_p = [...promo].sort((a, b) => {
    if (a.action === 'NEXT' && b.action !== 'NEXT') {
        return -1;
    } else if (a.action !== 'NEXT' && b.action === 'NEXT') {
        return 1;
    } else {
        return 0;
    }
  });
  export const globeIndex_ct = callntext
  export const globeIndex_prefix = 100
  export const globeIndex_reg = `*${globeIndex_prefix}*1*[]*4`
  export const globeIndex_theme = '#1f2e8d'