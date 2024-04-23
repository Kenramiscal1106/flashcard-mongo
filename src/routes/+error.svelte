<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="max-w-2xl m-auto">
    <h1 class="text-center">{$page.status}: {$page.error?.message}</h1>
</div>