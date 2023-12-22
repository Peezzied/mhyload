const promo = [
    {
        id: 1,
        title: 'Big Bente',
        price: 20,
        action: 'PURCHASE',
        action_payload: '3*[]*1*1'
    },
    {
        id: 2,
        title: 'FBML15',
        price: 15,
        action: 'PURCHASE',
        action_payload: '3*[]*1*2'
    },
    {
        id: 3,
        title: 'SURF4ALL',
        price: 99,
        action: 'PURCHASE',
        action_payload: '3*[]*1*9'
    },
    {
        id: 4,
        title: 'EZ Promos',
        action: 'NEXT',
        action_payload: [
            {
                id: 1,
                title: 'EZ50',
                price: 50,
                extra: 'Funaliw',
                action: 'PURCHASE',
                action_payload: '3*[]*1*3'
            },
            {
                id: 2,
                title: 'EZ70',
                price: 70,
                extra: 'Funaliw',
                action: 'PURCHASE',
                action_payload: '3*[]*1*4'
            },
            {
                id: 3,
                title: 'EZ90',
                price: 90,
                action: 'PURCHASE',
                action_payload: '3*[]*1*5'
            },
            {
                id: 4,
                title: 'EZ99',
                price: 99,
                action: 'PURCHASE',
                action_payload: '3*[]*1*6'
            },
            {
                id: 5,
                title: 'EZ110',
                price: 110,
                action: 'PURCHASE',
                action_payload: '3*[]*1*7'
            },
            {
                id: 6,
                title: 'EZ75',
                extra: 'Allnet',
                price: 75,
                action: 'PURCHASE',
                action_payload: '3*[]*1*8'
            },
            {
                id: 7,
                title: 'EZ99',
                price: 110,
                extra: '+ 5G',
                action: 'PURCHASE',
                action_payload: '3*[]*1*10'
            },
        ]
    }
]
const callntext = [
    {
        id: 1,
        title: 'All-Net SURF',
        price: 20,
        action: 'PURCHASE',
        action_payload: '3*[]*2*1'
    },
    {
        id: 2,
        title: 'All-Net SURF',
        price: 30,
        action: 'PURCHASE',
        action_payload: '3*[]*2*3'
    },
    {
        id: 3,
        title: 'AN20',
        price: 20,
        action: 'PURCHASE',
        action_payload: '3*[]*2*2'
    },
    {
        id: 4,
        title: 'COMBO10',
        price: 10,
        action: 'PURCHASE',
        action_payload: '3*[]*2*4'
    },
    {
        id: 5,
        title: 'COMBO15',
        price: 15,
        action: 'PURCHASE',
        action_payload: '3*[]*2*5'
    },
    {
        id: 6,
        title: 'COMBO20',
        price: 20,
        action: 'PURCHASE',
        action_payload: '3*[]*2*6'
    },
    {
        id: 7,
        title: 'EasyPLAN',
        price: 150,
        action: 'PURCHASE',
        action_payload: '3*[]*2*7'
    }
]

export const tm_p = [...promo].sort((a, b) => {
    if (a.action === 'NEXT' && b.action !== 'NEXT') {
        return -1;
    } else if (a.action !== 'NEXT' && b.action === 'NEXT') {
        return 1;
    } else {
        return 0;
    }
  });
  export const tm_ct = callntext
  export const tm_prefix = 100
  export const tm_reg = `*${tm_prefix}*1*[]*4`
  export const tm_theme = '#da1812'