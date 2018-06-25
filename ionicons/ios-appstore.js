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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM128 240h53.1l-18.5 32H128v-32zm11.3 112l9.5-45 24.8 16.2-34.3 28.8zm39.3-35.7l-24.9-15 16.9-29.2 18.5-32 37.4-64.8c1.6-2.8 5.2-3.7 7.9-2.1l15.1 8.6c2.8 1.6 3.7 5.1 2.1 7.9l-29 50.4-18.4 32-25.6 44.2zm33.5-44.3l18.4-32h52.7l18.1 32h-89.2zm97.4.3l-.2-.3-18.1-32-51.7-91.4c-1.6-2.7-.6-6.3 2.1-7.9l15.1-8.6c2.8-1.6 6.3-.6 7.9 2.1l60 105.8 9.8 17.2L310 272l-.5.3zm4 6l10.4-6.3 14.4-8.7 5 8.7 8.1 14.2-24.9 15-13-22.9zm51.2 73.7c-8.5-16.8-17.4-13.7-26.5-25.4-11.3-14.6-2.9-25.4 3.9-28.6 17.6-8.2 27.5 3 29.8 18.3 2.2 14-2.4 31.6-7.2 35.7zm19.3-80h-33l-18-32h51v32z' })
      )
    )
  );
};

exports.default = Icon;