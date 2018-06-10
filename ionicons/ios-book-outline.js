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
        _react2.default.createElement('path', { d: 'M347.62 64c-40.94 0-79.12 14-91.577 44.495C242.5 78 205.408 64 164.466 64 109.266 64 64 89.98 64 143v283h22.14c12.86-26.334 44.238-42 78.325-42 40.224 0 73.877 27.528 81.617 64h19.714c7.74-36.472 41.495-64 81.722-64 34.085 0 61.15 11.666 78.43 42H448V143c0-53.02-45.177-79-100.38-79zM248 410.926C230 385.056 199.27 368 164.5 368S100 378.055 81 403.926l-1 .537V141c3-41.825 40.09-61 84.293-61 45.162 0 82.145 18.708 83.363 61.808-.017.73.016 1.46.016 2.192l.328 13.103v253.823zM432 148v255.926C414 378.056 382.27 368 347.5 368S282 385.055 264 410.926V144c0-44.112 37.66-64 83.587-64C391.79 80 429 91.175 432 133v15z' })
      )
    )
  );
};

exports.default = Icon;