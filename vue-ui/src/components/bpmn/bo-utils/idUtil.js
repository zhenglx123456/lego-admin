import { catchError } from '@/utils/bpmn/printCatch'
import { getModeler } from '../bpmn-utils/BpmnDesignerUtils'
import { isIdValid } from '../bpmn-utils/BpmnValidator'

export function getIdValue(element) {
  return element.businessObject.id
}

export function setIdValue(element, value) {
  const errorMsg = isIdValid(element.businessObject, value)

  if (errorMsg && errorMsg.length) {
    return catchError(errorMsg)
  }

  const modeling = getModeler.getModeling()

  modeling.updateProperties(element, {
    id: value
  })
}
