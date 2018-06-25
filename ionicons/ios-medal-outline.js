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
        _react2.default.createElement('path', { d: 'M352 255.4c15.6 20.7 24 45.7 24 72.1 0 32.1-12.5 62.2-35.1 84.9s-52.8 35.1-84.9 35.1-62.2-12.5-84.9-35.1-35.1-52.8-35.1-84.9c0-26.4 8.5-51.5 24.1-72.2l-6.2-1.7-10.2-2.9c-15 21.8-23.7 48.3-23.7 76.8 0 75.1 60.9 136.5 136 136.5s136-61.4 136-136.5c0-28.4-8.7-54.8-23.6-76.6l-10.2 2.8-6.2 1.7z' }),
        _react2.default.createElement('path', { d: 'M298.7 270.1l-21.7 6c20.5 8.3 35 28.4 35 51.9 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-23.5 14.5-43.6 34.9-51.9l-21.6-6C195.5 283.2 184 304.3 184 328c0 39.7 32.3 72 72 72s72-32.3 72-72c0-23.7-11.5-44.8-29.3-57.9zM48 48v160l208 58 208-58V48H48zm400 16v32H64V64h384zM64 196v-84h112v116L64 196zm192 52.7l-64-17V112h128v119.7l-64 17zm80-20.7V112h112v84l-112 32z' })
      )
    )
  );
};

exports.default = Icon;