(function ($) {
  'use strict';

  let venues = [];
  let category = 'all';
  let audience = 'all';

  function card(v) {
    const badges = (v.badges || []).map((b, i) => `<span class="badge rounded-pill ${['badge-soft-pink','badge-soft-gold','badge-soft-mint','badge-soft-plum'][i%4]} me-1 mb-1">${b}</span>`).join('');
    return `<div class="col-md-6 col-xl-4 venue-item">
      <article class="venue-card h-100 p-4">
        <div class="d-flex justify-content-between gap-3 align-items-start mb-3">
          <div><div class="eyebrow">${v.categoryLabel}</div><h2 class="h4 fw-bold mt-1 mb-1">${v.name}</h2></div>
          <span class="badge text-bg-dark">${v.age || '18+'}</span>
        </div>
        <p class="venue-meta mb-3">${v.description}</p>
        <div class="mb-3">${badges}</div>
        <div class="small verified mb-3"><i class="bi bi-patch-check-fill me-1"></i>Verified ${v.verified}</div>
        <a class="btn btn-sm btn-outline-sincity" href="${v.localUrl || '#'}">Details</a>
      </article>
    </div>`;
  }

  function render() {
    const q = ($('#venueSearch').val() || '').toLowerCase().trim();
    const filtered = venues.filter(v => {
      const c = category === 'all' || (v.categories || []).includes(category);
      const a = audience === 'all' || (v.audience || []).includes(audience);
      const s = !q || [v.name, v.description, ...(v.badges || [])].join(' ').toLowerCase().includes(q);
      return c && a && s;
    });
    $('#venueGrid').html(filtered.map(card).join('') || '<div class="col-12"><div class="alert alert-light border">No venues match those filters yet.</div></div>');
    $('#resultCount').text(`${filtered.length} result${filtered.length === 1 ? '' : 's'}`);
  }

  $(async function () {
    try {
      venues = await $.getJSON('assets/data/venues.json');
      render();
    } catch (e) {
      $('#venueGrid').html('<div class="col-12"><div class="alert alert-warning">Could not load venues.json. Run this site through a local/web server rather than opening directory.html directly from the filesystem.</div></div>');
    }

    $('[data-category]').on('click', function () {
      $('[data-category]').removeClass('active'); $(this).addClass('active'); category = $(this).data('category'); render();
    });
    $('[data-audience]').on('click', function () {
      $('[data-audience]').removeClass('active'); $(this).addClass('active'); audience = $(this).data('audience'); render();
    });
    $('#venueSearch').on('input', render);
  });
})(jQuery);
