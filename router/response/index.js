/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const { buildResponse } = require("./success")
const { buildError } = require("./error")

exports.buildResponse = buildResponse
exports.buildError = buildError
