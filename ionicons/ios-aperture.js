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
        _react2.default.createElement('path', { d: 'M246.9 240l-9.9 17.1 8.6 14.9H266l9.1-15.6-9.5-16.4z' }),
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-1.1 240L337 430.1c-2.1 1-4.1 1.9-6.2 2.8-2.9 1.2-5.8 2.4-8.7 3.4l-94.2-163.2-81.2 140.7c-4.4-3.1-8.7-6.3-12.8-9.7l94.7-164H64.7c.4-5.4 1.1-10.7 2-16h189.7l-81.9-142c2.2-1.1 4.5-2.1 6.8-3 2.7-1.1 5.4-2.2 8.1-3.2l95 164.5 81.8-141.7c4.4 3.1 8.7 6.4 12.8 9.8L284.5 272h162.8c-.4 5.4-1.1 10.7-2 16H254.9z' })
      )
    )
  );
};

exports.default = Icon;