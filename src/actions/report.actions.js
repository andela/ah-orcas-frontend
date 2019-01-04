import swal from 'sweetalert';
import api from '../api';
import { REPORT_USER_PROFILE } from '../constants';

export const REPORT_USER = () => ({
  type: REPORT_USER_PROFILE,
});
// eslint-disable-next-line import/prefer-default-export
export const reportActions = userData => ({
  type: REPORT_USER_PROFILE,
  payload: api({
    url: '/article/report/',
    method: 'POST',
    data: { userData },
  }).then(() => {
    swal('Success', 'Your report has been recorded.');
  }),
});

export default reportActions;
