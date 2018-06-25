'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M12 10.5h9.7q.2.9.2 1.7 0 2.9-1.2 5.2T17.2 21 12 22.3q-2.1 0-4-.8t-3.3-2.2T2.5 16t-.8-4 .8-4 2.2-3.3T8 2.5t4-.8q4 0 6.9 2.7l-2.8 2.7Q14.5 5.5 12 5.5q-1.7 0-3.2.9T6.5 8.7 5.6 12t.9 3.3 2.3 2.3 3.2.9q1.2 0 2.1-.3t1.7-.8 1-1.1.7-1.2.3-1H12v-3.6z' })
    )
  );
};

exports.default = Icon;