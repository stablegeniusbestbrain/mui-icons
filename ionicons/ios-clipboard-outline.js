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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('circle', { cx: '256', cy: '95.7', r: '16' }),
        _react2.default.createElement('path', { d: 'M400 64h-92.1c4.1 4.6 7.3 10 9.4 16H392c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h74.7c2.1-6 5.3-11.4 9.4-16H112c-8.8 0-16 7.2-16 16v368c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z' }),
        _react2.default.createElement('path', { d: 'M176 111v17h-48v304h256V128h-48v-17c0-8.8-6.4-15-15.2-15H304c0-5.6-1-11-2.7-16-2.1-6-5.3-11.4-9.4-16-8.8-9.9-21.6-16-35.9-16s-27.1 6.1-35.9 16c-4.1 4.6-7.3 10-9.4 16-1.7 5-2.7 10.4-2.7 16h-14.5c-8.8 0-17.5 6.2-17.5 15zm160 49v-16h32v272H144V144h32v16h160zm-112-48V95.5c0-17.9 14.1-32 32-32s32 14.1 32 32V112h32v32H192v-32h32z' })
      )
    )
  );
};

exports.default = Icon;