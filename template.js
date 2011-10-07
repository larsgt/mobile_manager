$.template( "studyTemplate", 
'<h2>${name}</h2>This study is ${state} - Created at ${created_at}<p>Sac sponsor: ${sac_sponsor}</p>'
);

$.template( "studyListTemplate",
'<li><a href="/apps/pm.old/status.html" data-transition="slide">${name}</a></li>');