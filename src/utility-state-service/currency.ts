export class Currency {
    currencies = [
        'USD',
        'KRW',
        'GBP',
        'EUR',
        'OTR',
    ]
    selected = '----'

    update(e: any){
        this.selected = e.target.value
    }
}