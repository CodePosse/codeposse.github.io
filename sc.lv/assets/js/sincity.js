(function ($) {
  'use strict';

  const AGE_GATE_KEY = 'sincity_age_verified';

  $(function () {
    const ageModalEl = document.getElementById('ageGate');
    if (ageModalEl && localStorage.getItem(AGE_GATE_KEY) !== 'true') {
      const ageModal = new bootstrap.Modal(ageModalEl, { backdrop: 'static', keyboard: false });
      ageModal.show();
    }

    $('#ageGateEnter').on('click', function () {
      localStorage.setItem(AGE_GATE_KEY, 'true');
    });

    $('.js-share').on('click', async function () {
      const $button = $(this);
      const original = $button.html();
      const shareData = {
        title: $button.data('title') || document.title,
        text: $button.data('text') || '',
        url: window.location.href
      };

      if (navigator.share) {
        try { await navigator.share(shareData); }
        catch (error) { if (error.name !== 'AbortError') console.error(error); }
        return;
      }

      try {
        await navigator.clipboard.writeText(window.location.href);
        $button.html('<i class="bi bi-check-lg me-1"></i>Copied');
        setTimeout(() => $button.html(original), 1800);
      } catch (error) {
        console.error('Clipboard copy failed:', error);
      }
    });
  });
})(jQuery);
