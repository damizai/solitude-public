document.addEventListener("DOMContentLoaded", ( () => {
    if (!navigator.serviceWorker?.controller)
        return;
    const e = e => {
        const t = e.endsWith("js") ? "script" : "link"
          , o = "link" === t ? "href" : "src";
        for (let s of document.getElementsByTagName(t)) {
            const n = s[o];
            if (e.length > n ? e.endsWith(n) : n.endsWith(e)) {
                const e = document.createElement(t)
                  , o = s.text || s.textContent || s.innerHTML || "";
                return Array.from(s.attributes).forEach((t => e.setAttribute(t.name, t.value))),
                e.appendChild(document.createTextNode(o)),
                s.parentNode.replaceChildren(e, s),
                !0
            }
        }
    }
      , t = "updated"
      , o = () => {
        caches.match("https://id.v3/").then((e => {
            e ? e.json().then((e => {
                utils && utils.snackbarShow(`已刷新缓存，更新为${e.escape + ".0." + e.global + "." + e.local}版本最新内容`, !1, 2500)
            }
            )) : console.info("未找到缓存")
        }
        )).catch((e => console.error("缓存匹配出错", e)))
    }
    ;
    var s;
    sessionStorage.getItem(t) ? (o(),
    sessionStorage.removeItem(t)) : (s = "update",
    navigator.serviceWorker.controller.postMessage(s)),
    navigator.serviceWorker.addEventListener("message", (s => {
        const n = s.data;
        sessionStorage.setItem(t, n.type);
        const r = n.list?.filter((e => /\.(js|css)$/.test(e)));
        if (r)
            window.Pjax?.isSupported?.() && r.forEach(e),
            location.reload();
        else {
            const e = n.new
              , s = n.old;
            !s || e.global === s.global && e.local === s.local || o(),
            sessionStorage.removeItem(t)
        }
    }
    ))
}
));
