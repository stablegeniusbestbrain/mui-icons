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
        _react2.default.createElement('path', { d: 'M288 112c22.223 0 39.997-17.776 39.997-40 0-22.225-17.774-40-39.997-40s-40.003 17.775-40.003 40c0 22.224 17.78 40 40.003 40zm0 120h104v-40h-72l-44.802-69.333C267.5 111 257.062 104.53 244.265 104.53c-3.198 0-8.828.532-12.8 1.748L120 144v112h40v-80l40.53-16L120 480h40l56.698-164.27L267 384v96h38V352l-57.03-96 19.744-61.864L288 232z' })
      )
    )
  );
};

exports.default = Icon;