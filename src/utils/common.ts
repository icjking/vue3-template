import { isString } from '@/utils/is';
import { notification } from 'ant-design-vue';
import { Ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';

const { t } = useI18n();
const { createErrorModal } = useMessage();

export function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
  ];
}

export function useFormValid<T extends Object = any>(formRef: Ref<any>) {
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data as T;
  }

  return { validForm };
}

export function handleApiSuccess(message) {
  notification.success({
    message: message || t('sys.action.ok'),
    duration: 3,
  });
}

export function handleApiError(error) {
  notification.error({
    message: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
    duration: 3,
  });
}

export function handleApiErrorByModal(
  error: Error | string,
  selector: string | HTMLElement | null = null,
  showDefaultMsg = true,
) {
  // @formatter:off
  const content = isString(error)
    ? error
    : (error as unknown as Error).message ||
      (showDefaultMsg ? t('sys.api.networkExceptionMsg') : '');
  // @formatter:on
  createErrorModal({
    title: t('sys.api.errorTip'),
    content: content,
    getContainer: selector || document.body,
  });
}
