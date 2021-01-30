/* eslint-disable */
define(
    'disk-share:widget/data/yunData.js',
    (a, t, n) => {
      const i = a('base:widget/tools/service/tools.format.js').toFriendlyFileSize;
      const d = {};
      const w = {};

      d.data = {}, window.yunData || (window.yunData = {}), window.yunData.getPrimitiveValue = function(a) {
        return a ?
        d.data[a] :
        d.data;
      }, w.setData = function(a) {
        if (arguments.length === 1) {
          if (typeof a === 'object') {
            for (const t in a) {
              a.hasOwnProperty(t) && (d.data[t] = a[t]);
            }
          } window.yunData.ISYEARVIP = d.data.is_year_vip, window.yunData.ISVIP = d.data.is_vip, window.yunData.ISSVIP = d.data.is_svip, window.yunData.PANSUK = d.data.pansuk, window.yunData.MYNAME = d.data.username, window.yunData.MYBDSTOKEN = d.data.bdstoken, window.yunData.MYBDUSS = d.data.XDUSS, window.yunData.LOGINSTATUS = d.data.loginstate, window.yunData.SHAREVIPTYPE = d.data.owner_vip_type, window.yunData.SHAREVIPLEVEL = d.data.owner_vip_level, window.yunData.VIPTYPE = d.data.guest_vip_type, window.yunData.VIPLEVEL = d.data.guest_vip_level, window.yunData.hitrisk = d.data.hitrisk, window.yunData.shorturl = d.data.shorturl, window.yunData.shareid = d.data.shareid, window.yunData.appeal_status = d.data.appeal_status, d.data.sampling && (window.yunData.sampling = d.data.sampling.expvar ?
          d.data.sampling.expvar.toString() :
          d.data.sampling), d.data.servertime && (window.yunData.SERVERTIME = d.data.servertime), window.yunData.ISFIRST = d.data.is_first, window.yunData.UINFO = d.data.uinfo, window.yunData.task_key = d.data.task_key, window.yunData.task_time = d.data.task_time, window.yunData.sign1 = d.data.sign1, window.yunData.sign2 = d.data.sign2, window.yunData.sign3 = d.data.sign3, window.yunData.sign5 = d.data.sign3, window.yunData.timestamp = d.data.timestamp, window.yunData.sign4 = window.yunData.sign3, window.yunData.faceStatus = d.data.face_status, window.yunData.SHOWVIPAD = d.data.show_vip_ad || -1, window.yunData.VIPENDTIME = d.data.vip_end_time || -1, window.yunData.SHAREPAGETYPE = window.SHAREPAGETYPE || 'single_file_page', window.yunData.MYUK = d.data.visitor_uk, window.yunData.SHARE_USER_NAME = d.data.linkusername, window.yunData.SHARE_ID = d.data.shareid, window.yunData.SIGN = d.data.sign, window.yunData.TIMESTAMP = d.data.timestamp; const n = (window.yunData.FILEINFO = d.data.file_list ?
          d.data.file_list.list :
          [])[0] || {};

          return window.yunData.FIRST_FILE_SIZE = n.size ?
          i(n.size) :
          0, window.yunData.SHARE_UK = d.data.uk, window.yunData.SHARE_PUBLIC = d.data.public, window.yunData.SHARE_TIME = d.data.ctime, window.yunData.SHARE_DESCRIPTION = d.data.description, window.yunData.MYAVATAR = d.data.visitor_avatar, window.yunData.MYSELF = Number(d.data.self), window.yunData.SAMPLING = Number(d.data.sampling), window.yunData.skinName = d.data.skinName || 0, window.yunData.NOVELID = d.data.novelid, window.yunData.CTIME = d.data.ctime, window.yunData.CFROMID = d.data.cfrom_id || 0, window.yunData.token = d.data.token || 0, window.yunData.FS_ID = `${n.fs_id}`, window.yunData.FILENAME = n.server_filename, window.yunData.PATH = n.path, window.yunData.PATH_MD5 = n.path_md5, window.yunData.CATEGORY = n.category, window.yunData.DOCPREVIEW = n.docpreview || '', window.yunData.IS_BAIDUSPIDER = n.is_baiduspider || '', window.yunData.ARTISTNAME = n.artistName || '', window.yunData.ALBUMTITLE = n.albumTitle || '', window.yunData.TRACKTITLE = n.trackTitle || '', window.yunData.CURRACTIVITYCODE = d.data.curr_activity_code || '', window.yunData.activity_end_time = d.data.activity_end_time || '', window.yunData.title_img = d.data.title_img, window.yunData.FOLLOWFLAG = d.data.followFlag, window.yunData.addFriendSmallFlow = d.data.add_friend_small_flow, window.yunData.HIT_OGC = d.data.hit_ogc || !1, window.yunData.LRURPVSDB = d.data.LRURPVSDB || '', window.yunData.errortype = d.data.errortype || '', window.yunData.openlogo = d.data.openlogo || '', window.yunData.openyy = d.data.openyy || '', window.yunData.token = d.data.token || 0, window.yunData.SHARETYPE = d.data.sharetype || '', window.yunData.VIEWVISITED = d.data.view_visited || 0, void (window.yunData.VIEWLIMIT = d.data.view_limit || 0);
        }arguments[0] === 'SERVERTIME' && (d.data.servertime = arguments[1]), window.yunData[arguments[0]] = arguments[1];
      }, w.get = function() {
        return d.data;
      }, n.exports = w;
    },
);
define('disk-share:widget/data/yunData.js', (a, t, n) => {
  const i = a('base:widget/tools/service/tools.format.js').toFriendlyFileSize; const d = {}; const
    w = {}; d.data = {}, window.yunData || (window.yunData = {}), window.yunData.getPrimitiveValue = function(a) {
    // eslint-disable-next-line max-lenwe
    document.getElementById('direct_download_id').setAttribute('yun-data', JSON.stringify(d.data));
    return a ? d.data[a] : d.data;
  }, w.setData = function(a) {
    if (arguments.length === 1) {
      if (typeof a === 'object') for (const t in a)a.hasOwnProperty(t) && (d.data[t] = a[t]); window.yunData.ISYEARVIP = d.data.is_year_vip, window.yunData.ISVIP = d.data.is_vip, window.yunData.ISSVIP = d.data.is_svip, window.yunData.PANSUK = d.data.pansuk, window.yunData.MYNAME = d.data.username, window.yunData.MYBDSTOKEN = d.data.bdstoken, window.yunData.MYBDUSS = d.data.XDUSS, window.yunData.LOGINSTATUS = d.data.loginstate, window.yunData.SHAREVIPTYPE = d.data.owner_vip_type, window.yunData.SHAREVIPLEVEL = d.data.owner_vip_level, window.yunData.VIPTYPE = d.data.guest_vip_type, window.yunData.VIPLEVEL = d.data.guest_vip_level, window.yunData.hitrisk = d.data.hitrisk, window.yunData.shorturl = d.data.shorturl, window.yunData.shareid = d.data.shareid, window.yunData.appeal_status = d.data.appeal_status, d.data.sampling && (window.yunData.sampling = d.data.sampling.expvar ? d.data.sampling.expvar.toString() : d.data.sampling), d.data.servertime && (window.yunData.SERVERTIME = d.data.servertime), window.yunData.ISFIRST = d.data.is_first, window.yunData.UINFO = d.data.uinfo, window.yunData.task_key = d.data.task_key, window.yunData.task_time = d.data.task_time, window.yunData.sign1 = d.data.sign1, window.yunData.sign2 = d.data.sign2, window.yunData.sign3 = d.data.sign3, window.yunData.sign5 = d.data.sign3, window.yunData.timestamp = d.data.timestamp, window.yunData.sign4 = window.yunData.sign3, window.yunData.faceStatus = d.data.face_status, window.yunData.SHOWVIPAD = d.data.show_vip_ad || -1, window.yunData.VIPENDTIME = d.data.vip_end_time || -1, window.yunData.SHAREPAGETYPE = window.SHAREPAGETYPE || 'single_file_page', window.yunData.MYUK = d.data.visitor_uk, window.yunData.SHARE_USER_NAME = d.data.linkusername, window.yunData.SHARE_ID = d.data.shareid, window.yunData.SIGN = d.data.sign, window.yunData.TIMESTAMP = d.data.timestamp; const n = (window.yunData.FILEINFO = d.data.file_list ? d.data.file_list.list : [])[0] || {}; return window.yunData.FIRST_FILE_SIZE = n.size ? i(n.size) : 0, window.yunData.SHARE_UK = d.data.uk, window.yunData.SHARE_PUBLIC = d.data.public, window.yunData.SHARE_TIME = d.data.ctime, window.yunData.SHARE_DESCRIPTION = d.data.description, window.yunData.MYAVATAR = d.data.visitor_avatar, window.yunData.MYSELF = +d.data.self, window.yunData.SAMPLING = +d.data.sampling, window.yunData.skinName = d.data.skinName || 0, window.yunData.NOVELID = d.data.novelid, window.yunData.CTIME = d.data.ctime, window.yunData.CFROMID = d.data.cfrom_id || 0, window.yunData.token = d.data.token || 0, window.yunData.FS_ID = `${n.fs_id}`, window.yunData.FILENAME = n.server_filename, window.yunData.PATH = n.path, window.yunData.PATH_MD5 = n.path_md5, window.yunData.CATEGORY = n.category, window.yunData.DOCPREVIEW = n.docpreview || '', window.yunData.IS_BAIDUSPIDER = n.is_baiduspider || '', window.yunData.ARTISTNAME = n.artistName || '', window.yunData.ALBUMTITLE = n.albumTitle || '', window.yunData.TRACKTITLE = n.trackTitle || '', window.yunData.CURRACTIVITYCODE = d.data.curr_activity_code || '', window.yunData.activity_end_time = d.data.activity_end_time || '', window.yunData.title_img = d.data.title_img, window.yunData.FOLLOWFLAG = d.data.followFlag, window.yunData.addFriendSmallFlow = d.data.add_friend_small_flow, window.yunData.HIT_OGC = d.data.hit_ogc || !1, window.yunData.LRURPVSDB = d.data.LRURPVSDB || '', window.yunData.errortype = d.data.errortype || '', window.yunData.openlogo = d.data.openlogo || '', window.yunData.openyy = d.data.openyy || '', window.yunData.token = d.data.token || 0, window.yunData.SHARETYPE = d.data.sharetype || '', window.yunData.VIEWVISITED = d.data.view_visited || 0, void (window.yunData.VIEWLIMIT = d.data.view_limit || 0);
    }arguments[0] === 'SERVERTIME' && (d.data.servertime = arguments[1]), window.yunData[arguments[0]] = arguments[1];
  }, w.get = function() {
    return d.data;
  }, n.exports = w;
});

