import { CNode } from 'css-render'
import { c, namespace } from '../../_utils/cssr'
import commonVariables from '../common/_common'

const { cubicBezierEaseInOut } = commonVariables

interface FadeDownTransitionOptions {
  name?: string
  fromOffset?: string
  enterDuration?: string
  leaveDuration?: string
  enterCubicBezier?: string
  leaveCubicBezier?: string
}

export default function ({
  name = 'fade-down',
  fromOffset = '-4px',
  enterDuration = '.3s',
  leaveDuration = '.3s',
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
}: FadeDownTransitionOptions = {}): CNode[] {
  return [
    c(
      `&.${namespace}-${name}-transition-enter-from, &.${namespace}-${name}-transition-leave-to`,
      {
        opacity: 0,
        transform: `translateY(${fromOffset})`
      }
    ),
    c(
      `&.${namespace}-${name}-transition-enter-to, &.${namespace}-${name}-transition-leave-from`,
      {
        opacity: 1,
        transform: 'translateY(0)'
      }
    ),
    c(`&.${namespace}-${name}-transition-leave-active`, {
      transition: `opacity ${leaveDuration} ${leaveCubicBezier}, transform ${leaveDuration} ${leaveCubicBezier}`
    }),
    c(`&.${namespace}-${name}-transition-enter-active`, {
      transition: `opacity ${enterDuration} ${enterCubicBezier}, transform ${enterDuration} ${enterCubicBezier}`
    })
  ]
}