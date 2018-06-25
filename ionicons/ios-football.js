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
        _react2.default.createElement('path', { d: 'M256 48C141.137 48 48 141.136 48 256s93.137 208 208 208c114.872 0 208-93.138 208-208S370.87 48 256 48zm41.15 394.18c-13.513 2.656-30.326 4.186-44 4.45a190.525 190.525 0 0 1-38.5-4.494 978.146 978.146 0 0 1-6.804-1.777l-24.417-65.436L203.073 336h105.854l.57 1.076 19.34 38.852-23.618 64.282c-2.667.714-5.358 1.37-8.07 1.97zM189.58 77.28L247 116.576v58.147l-70.997 60.067-49.403-22.51-4.167-1.9-22.332-64.018c22.01-31.204 53.14-55.532 89.478-69.082zm221.986 68.787l-22.432 64.483-53.992 24.388L264 174.723v-58.147l57.596-39.415c36.362 13.484 67.905 37.753 89.968 68.907zM66.144 273.414l53.756-46.518 49.54 22.6.558.254 19.718 77.287-20.433 38.53-69.86-.916c-18.348-26.36-30.214-57.545-33.28-91.236zm276.575 92.15l-20.435-38.528 19.752-77.416 49.997-22.78 53.822 46.574c-3.065 33.69-14.932 64.877-33.277 91.236l-69.86.915z' })
      )
    )
  );
};

exports.default = Icon;