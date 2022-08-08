export class CreditRating {
    ratings = [
        'AAA',
        'AA+',
        'AA',
        'AA-',
        'A+',
        'A',
        'A-',
        'BBB+',
        'BBB',
        'BBB-',
        'BB+',
        'BB',
        'BB-',
        'B+',
        'B',
        'B-',
        'CCC+',
        'CCC',
        'CCC-',
        'D'
    ]
    selected = '----'

    update(e: any){
        this.selected = e.target.value
    }
}