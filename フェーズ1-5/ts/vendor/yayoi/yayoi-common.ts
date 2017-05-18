/* TS Document */
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../component/_vendor-mdl.ts" />
/// <reference path="../../component/_header.ts" />
/// <reference path="../../component/_footer.ts" />
/// <reference path="../../component/_sidemenu.ts" />
/// <reference path="../../component/_message.ts" />
/// <reference path="../../component/_input.ts" />
/// <reference path="../../component/_list.ts" />
/// <reference path="../../component/_headermenu.ts" />
/// <reference path="../../component/_anchor.ts" />
/// <reference path="../../component/_notice.ts" />
/// <reference path="../../component/_card.ts" />

"use strict";

$(document).ready(() => {
    header.SetCtrlEvents();
    footer.SetCtrlEvents();
    message.SetCtrlEvents();
    Vendor.Mdl.SetCtrlEvents();
    sidemenu.SetCtrlEvents();
    input.SetCtrlEvents();
    list.SetCtrlEvents();
    headermenu.SetCtrlEvents();
    anchor.SetCtrlEvents();
    notice.SetCtrlEvents();
    card.SetCtrlEvents();
});