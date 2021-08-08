import { trigger, state, style, transition, animate } from '@angular/animations';
 
export const EnterLeft =  [
  trigger('enterStateLeft', [
    state('void', style({
      transform: 'translateX(-100%)',
      opacity: 0
    })),
    transition(':enter', [
      animate(800, style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ])
];

export const EnterRight = [
  trigger('enterStateRight', [
    state('void', style({
      transform: 'translateX(10%)',
      opacity: 0
    })),
    transition(':enter', [
      animate(800, style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ])
];

export const EnterNoMove = [
  trigger('enterState', [
    state('void', style({
      // transform: 'translateX(-100%)',
      opacity: 0
    })),
    transition(':enter', [
      animate(1100, style({
        // transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ])
];

export const EnterTop = [
  trigger('enterStateTop', [
    state('void', style({
      transform: 'translateY(-100%)',
      opacity: 0
    })),
    transition(':enter', [
      animate(800, style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ])
  ])
];

export const EnterBottom = [
  trigger('enterStateBottom', [
    state('void', style({
      transform: 'translateY(100%)',
      opacity: 0
    })),
    transition(':enter', [
      animate(800, style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ])
  ])
];

