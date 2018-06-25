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
        _react2.default.createElement('path', { d: 'M391 367l-.2-.1L323.7 256H188.6L122 366.9h-.2l-.2.3c-5.5 8.3-8.3 18.8-8.3 24.7 0 12.9 4.5 16.8 6 18.1 4.5 3.8 12.7 6 23.7 6h226c10.3 0 18.2-2.5 23-6.8 4.2-3.8 6.5-10 6.7-17.8.2-5.9-2.1-16-7.5-24.2l-.2-.2z' }),
        _react2.default.createElement('path', { d: 'M436.9 354.4L320 159V64h16V48H176v16h16v95L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6zM216 96h24v16h-24V96zm0 48h40v16h-40v-16zm-16.7 48H240v16h-50.2l9.5-16zm215.3 200c-.7 24.2-15.9 40-45.7 40H143c-29.9 0-45.7-12.2-45.7-39.8 0-9.5 4-23 10.9-33.5L179.5 240h153.2l71.8 118.7c7 10.6 10.4 23.9 10.1 33.3z' })
      )
    )
  );
};

exports.default = Icon;