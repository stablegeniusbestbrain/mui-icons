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
        _react2.default.createElement('path', { d: 'M32 110v292c0 7.8 6.1 14 14 14h420c7.9 0 14-6.2 14-14V110c0-7.8-6.1-14-14-14H46c-7.9 0-14 6.3-14 14zm16.7 146.4c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-3.8 0-7-3.2-7-7zM470 256c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1zm-38-144v288H80V112h352z' })
      )
    )
  );
};

exports.default = Icon;