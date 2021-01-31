import {
    trigger,
    transition, animate, style
} from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeave', [
    transition(':enter', [
        style({ transform: 'translateY(-50%)' }),
        animate('0.5s ease-in')
    ]),
    transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateY(100%)' }))
    ])
]);

