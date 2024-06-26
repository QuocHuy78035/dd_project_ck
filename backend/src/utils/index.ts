import _ from 'lodash';
import { Types } from 'mongoose';

export const getInfoData = ({ object = {}, fields = [] }) => {
  return _.pick(object, fields);
};
/*
  ['type', 1],
  ['col', 2]
  => {
    type: 1,
    col: 2
  }
*/
export const getSelectData = (select = []) => {
  return Object.fromEntries(select.map((e) => [e, 1]));
};
export const getUnselectData = (select = []) => {
  return Object.fromEntries(select.map((e) => [e, 0]));
};
export const removeUndefinedInObject = (obj: Object) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) delete obj[key];
  });
  return obj;
};
export const convertToObjectId = (id: number) => new Types.ObjectId(id);
