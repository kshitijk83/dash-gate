type student = {
    _id: string;
    name: string;
    rollno: string;
    gender: 'M' | 'F';
    year: '1st' | '2nd' | '3rd' | '4th' | '5th';
    hostel:
        | 'UBH'
        | 'DBH'
        | 'Himadgri'
        | 'Himgiri'
        | 'KBH'
        | 'NBH'
        | 'PGH'
        | 'AGH';
    out_of_campus: boolean;
};
