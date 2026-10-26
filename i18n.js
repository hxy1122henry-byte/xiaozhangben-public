/* Translation keys remain stable in stored categories. User names and notes are never translated. */
const languageRows=String.raw`
小账本|Pocket Ledger|Libro de gastos|Carnet de comptes|家計簿
好好生活，明白花钱|Live well. Know your money.|Vive bien. Conoce tus gastos.|Vivez bien. Suivez votre argent.|暮らしとお金を、わかりやすく。
记账|Record|Registrar|Saisir|記録
总览|Overview|Resumen|Aperçu|概要
账户|Accounts|Cuentas|Comptes|口座
账单|Ledger|Movimientos|Opérations|明細
设置|Settings|Ajustes|Paramètres|設定
记一笔|New entry|Nuevo registro|Nouvelle opération|新しい記録
记录今天的小小收支。|Capture today's income and expenses.|Registra los movimientos de hoy.|Notez les mouvements du jour.|今日の収支を記録しましょう。
我的收支|My finances|Mis finanzas|Mes finances|私の収支
收支总览|Financial overview|Resumen financiero|Aperçu financier|収支の概要
看一看，这个月的钱去了哪里。|See where your money went this month.|Consulta tus gastos del mes.|Découvrez vos dépenses du mois.|今月のお金の流れを確認。
我的账单|My ledger|Mis movimientos|Mes opérations|私の明細
每一笔记录，都清清楚楚。|Every transaction, clearly organized.|Cada movimiento, bien organizado.|Chaque opération, bien organisée.|すべての明細をわかりやすく。
管理你的账本和数据备份。|Manage your ledger and backups.|Gestiona tus datos y copias.|Gérez vos données et sauvegardes.|家計簿とバックアップを管理。
每一笔小记录，都是生活的足迹。|Small entries. A clearer picture.|Pequeños registros, más claridad.|De petites notes pour y voir clair.|小さな記録で、暮らしが見える。
支出|Expense|Gasto|Dépense|支出
收入|Income|Ingreso|Revenu|収入
结余|Net balance|Saldo neto|Solde net|収支差額
本月结余|Monthly net balance|Saldo mensual|Solde du mois|今月の収支差額
本月收入|Monthly income|Ingresos del mes|Revenus du mois|今月の収入
本月支出|Monthly expenses|Gastos del mes|Dépenses du mois|今月の支出
币种|Currency|Moneda|Devise|通貨
金额|Amount|Importe|Montant|金額
分类|Category|Categoría|Catégorie|カテゴリ
日期|Date|Fecha|Date|日付
备注|Note|Nota|Note|メモ
付款账户|Pay from|Pagar desde|Compte débité|支払口座
收款账户|Receive into|Ingresar en|Compte crédité|入金口座
付款或收款账户|Payment or receiving account|Cuenta de pago o ingreso|Compte de paiement ou réception|支払・入金口座
未分配账户|Unassigned account|Sin cuenta|Sans compte|口座未指定
暂无账户，先到“账户”添加|No accounts yet — add one in Accounts|Añade una cuenta en Cuentas|Ajoutez un compte dans Comptes|「口座」で口座を追加してください
全部账户|All accounts|Todas las cuentas|Tous les comptes|すべての口座
保存这笔记录|Save entry|Guardar registro|Enregistrer|記録を保存
编辑记录|Edit entry|Editar registro|Modifier l’opération|記録を編集
保存修改|Save changes|Guardar cambios|Enregistrer les modifications|変更を保存
取消编辑|Cancel editing|Cancelar edición|Annuler la modification|編集をキャンセル
取消|Cancel|Cancelar|Annuler|キャンセル
编辑|Edit|Editar|Modifier|編集
已保存|Saved|Guardado|Enregistré|保存しました
已删除|Deleted|Eliminado|Supprimé|削除しました
确定删除这笔记录？|Delete this entry?|¿Eliminar este registro?|Supprimer cette opération ?|この記録を削除しますか？
这笔钱用在了哪里？|What was this for?|¿Para qué fue?|À quoi cela correspond-il ?|何に使いましたか？
记录每一笔，让生活更有数|A little record. A clearer day.|Cada registro cuenta.|Chaque opération compte.|一つずつ記録して、暮らしを見える化。
统计币种 · 分别记账，不换算|Reporting currency · no conversion|Moneda del resumen · sin conversión|Devise des statistiques · sans conversion|集計通貨・換算なし
全部币种|All currencies|Todas las monedas|Toutes les devises|すべての通貨
全部类型|All types|Todos los tipos|Tous les types|すべての種類
只看支出|Expenses only|Solo gastos|Dépenses uniquement|支出のみ
只看收入|Income only|Solo ingresos|Revenus uniquement|収入のみ
收支明细|Transactions|Movimientos|Opérations|収支明細
按日期排列|Sorted by date|Por fecha|Par date|日付順
搜索备注或分类|Search notes or categories|Buscar notas o categorías|Rechercher notes ou catégories|メモ・カテゴリを検索
搜索账单|Search transactions|Buscar movimientos|Rechercher des opérations|明細を検索
没有符合条件的记录|No matching entries|Sin resultados|Aucun résultat|一致する記録がありません
这个月的账本还是空的。\n点击底部“记账”，记下第一笔吧。|No entries this month. Tap Record to get started.|Sin registros este mes. Pulsa Registrar.|Aucune opération ce mois-ci. Touchez Saisir.|今月の記録はありません。「記録」から始めましょう。
本月支出去向|Expense breakdown|Desglose de gastos|Répartition des dépenses|今月の支出内訳
记下支出后，在这里查看分类统计。|Your expense categories will appear here.|Tus categorías de gastos aparecerán aquí.|Vos catégories de dépenses apparaîtront ici.|支出を記録すると内訳が表示されます。
跨月趋势|Monthly trends|Tendencias mensuales|Tendances mensuelles|月別の推移
以所选月份为截止月份 · 无记录的月份按 0 显示|Ends at the selected month · empty months show zero|Hasta el mes elegido · meses vacíos a cero|Jusqu’au mois choisi · mois vides à zéro|選択月まで・記録のない月は0で表示
最近 6 个月|Last 6 months|Últimos 6 meses|6 derniers mois|過去6か月
最近 12 个月|Last 12 months|Últimos 12 meses|12 derniers mois|過去12か月
分类支出跨月对比|Category trends|Tendencias por categoría|Tendances par catégorie|カテゴリ別の月比較
全部支出|All expenses|Todos los gastos|Toutes les dépenses|すべての支出
月份|Month|Mes|Mois|月
查看每月具体金额|View monthly amounts|Ver importes mensuales|Voir les montants mensuels|月ごとの金額を見る
轻点数据点，查看当月金额|Tap a point to see the monthly amount|Toca un punto para ver el importe|Touchez un point pour voir le montant|点をタップして月の金額を表示
我的账本|My ledger|Mi libro|Mon carnet|私の家計簿
给今天，记上一笔|Add an entry today|Añade un registro hoy|Ajoutez une opération|今日の記録を追加
最近记录|Recent activity|Actividad reciente|Activité récente|最近の記録
查看全部 ↗|View all ↗|Ver todo ↗|Tout voir ↗|すべて表示 ↗
还没有记录。每一笔小小的收支，都值得被认真记下。|No entries yet. Start with a small everyday transaction.|Sin registros. Empieza con un movimiento cotidiano.|Aucune opération. Commencez par une dépense quotidienne.|まだ記録がありません。身近な収支から始めましょう。
收起分类 ↑|Fewer categories ↑|Menos categorías ↑|Moins de catégories ↑|カテゴリを折りたたむ ↑
数据与备份|Data & backups|Datos y copias|Données et sauvegardes|データとバックアップ
导出备份|Export backup|Exportar copia|Exporter une sauvegarde|バックアップを書き出す
恢复备份|Restore backup|Restaurar copia|Restaurer une sauvegarde|バックアップを復元
账本保存在当前浏览器。定期导出一份备份，留住每一笔记录。|Saved in this browser. Export backups regularly.|Guardado en este navegador. Exporta copias con frecuencia.|Enregistré dans ce navigateur. Exportez régulièrement une sauvegarde.|このブラウザに保存されます。定期的にバックアップしてください。
恢复备份会替换当前账本，请先导出已有数据。|Restoring replaces this ledger. Export your current data first.|Restaurar reemplaza los datos. Exporta primero una copia.|La restauration remplace les données. Exportez-les d’abord.|復元すると現在のデータが置き換わります。先に書き出してください。
更换浏览器或清理网站数据前，也请先备份。|Back up before switching browsers or clearing website data.|Haz una copia antes de cambiar de navegador o borrar datos.|Sauvegardez avant de changer de navigateur ou d’effacer les données.|ブラウザの変更やサイトデータの削除前にバックアップしてください。
重置账本|Reset ledger|Restablecer datos|Réinitialiser le carnet|家計簿をリセット
确定重置账本？|Reset this ledger?|¿Restablecer los datos?|Réinitialiser ce carnet ?|家計簿をリセットしますか？
确认清空|Confirm reset|Confirmar reinicio|Confirmer la réinitialisation|リセットを確定
重置|RESET|REINICIAR|EFFACER|リセット
请输入“重置”以确认|Type RESET to confirm|Escribe REINICIAR para confirmar|Saisissez EFFACER pour confirmer|「リセット」と入力して確認
清除所有账户与收支记录，恢复到初始状态。此操作无法撤销，建议先导出备份。|Clear all accounts and entries. This cannot be undone; export a backup first.|Borra cuentas y registros. Es irreversible; exporta una copia.|Efface comptes et opérations. Action irréversible ; exportez une sauvegarde.|すべての口座と記録を削除します。元に戻せないため先にバックアップしてください。
所有账户、初始余额和各币种收支记录都会被清除，并在连接后同步清空其他设备的账本。此操作无法撤销；已导出的备份文件会保留。|All accounts, opening balances and entries will be cleared on connected devices after syncing. Exported backup files are kept.|Se borrarán cuentas, saldos y registros de los dispositivos al sincronizar. Las copias exportadas se conservan.|Les comptes, soldes et opérations seront effacés des appareils après synchronisation. Les sauvegardes exportées sont conservées.|同期後、すべての端末の口座・開始残高・記録が削除されます。書き出したバックアップは残ります。
我的账户|My accounts|Mis cuentas|Mes comptes|私の口座
每一处余额，都清清楚楚。|Every balance, in one place.|Todos tus saldos, en un lugar.|Tous vos soldes au même endroit.|すべての残高をひと目で。
钱分别放在哪里|A home for every balance|Un lugar para cada saldo|Un compte pour chaque solde|お金の置き場所を管理
＋ 添加账户|＋ Add account|＋ Añadir cuenta|＋ Ajouter un compte|＋ 口座を追加
添加账户|Add account|Añadir cuenta|Ajouter un compte|口座を追加
编辑账户|Edit account|Editar cuenta|Modifier le compte|口座を編集
账户名称|Account name|Nombre de cuenta|Nom du compte|口座名
账户类型|Account type|Tipo de cuenta|Type de compte|口座の種類
银行卡|Bank account|Cuenta bancaria|Compte bancaire|銀行口座
微信|WeChat|WeChat|WeChat|WeChat
支付宝|Alipay|Alipay|Alipay|Alipay
现金|Cash|Efectivo|Espèces|現金
其他|Other|Otra|Autre|その他
初始余额|Opening balance|Saldo inicial|Solde initial|開始残高
保存账户|Save account|Guardar cuenta|Enregistrer le compte|口座を保存
账户已保存|Account saved|Cuenta guardada|Compte enregistré|口座を保存しました
查看账单|View transactions|Ver movimientos|Voir les opérations|明細を見る
归档|Archive|Archivar|Archiver|アーカイブ
已归档|Archived|Archivada|Archivé|アーカイブ済み
恢复使用|Reactivate|Reactivar|Réactiver|再び使用する
查看已归档账户|Show archived accounts|Ver cuentas archivadas|Afficher les comptes archivés|アーカイブした口座を表示
隐藏已归档账户|Hide archived accounts|Ocultar cuentas archivadas|Masquer les comptes archivés|アーカイブした口座を非表示
添加银行卡、微信或现金账户，分别查看余额。|Add bank, wallet or cash accounts to track each balance.|Añade cuentas bancarias, monederos o efectivo.|Ajoutez des comptes bancaires, portefeuilles ou espèces.|銀行・ウォレット・現金口座を追加して残高を管理。
例如：工商银行卡、微信钱包|e.g. Everyday bank, Wallet|p. ej. Banco, Monedero|ex. Banque, Portefeuille|例：生活用銀行、ウォレット
余额 = 初始余额 + 全部收入 − 全部支出，按币种分别统计。仅反映手动记录，不连接银行或微信。|Balance = opening balance + income − expenses. Currencies stay separate. Manual records only; no bank connection.|Saldo = saldo inicial + ingresos − gastos. Sin conversión ni conexión bancaria.|Solde = solde initial + revenus − dépenses. Devises séparées. Saisie manuelle sans connexion bancaire.|残高＝開始残高＋収入−支出。通貨別に管理します。銀行への接続はありません。
填写开始用此账户记账前的余额。归入本账户的账单会在此基础上增减，避免把同一笔钱重复计入。|Enter the balance before the entries assigned to this account. Avoid counting the same money twice.|Indica el saldo anterior a los registros de esta cuenta. Evita duplicar importes.|Saisissez le solde avant les opérations de ce compte pour éviter les doublons.|この口座で記録を始める前の残高を入力し、二重計上を避けてください。
请选择|Choose|Elegir|Choisir|選択してください
选择|Choose|Elegir|Choisir|選択
关闭选择面板|Close picker|Cerrar selector|Fermer le sélecteur|選択画面を閉じる
上一年|Previous year|Año anterior|Année précédente|前年
下一年|Next year|Año siguiente|Année suivante|翌年
上个月|Previous month|Mes anterior|Mois précédent|前月
下个月|Next month|Mes siguiente|Mois suivant|翌月
回到本月|This month|Este mes|Ce mois-ci|今月
选择今天|Today|Hoy|Aujourd’hui|今日
语言|Language|Idioma|Langue|言語
使用币种|Your currencies|Tus monedas|Vos devises|使用する通貨
添加币种|Add currency|Añadir moneda|Ajouter une devise|通貨を追加
请选择币种|Choose a currency|Elige una moneda|Choisissez une devise|通貨を選択
请先在设置中添加并选择币种|Add a currency in Settings first.|Añade una moneda en Ajustes.|Ajoutez une devise dans Paramètres.|設定で使用する通貨を追加してください。
移除|Remove|Quitar|Retirer|削除
已使用|In use|En uso|Utilisée|使用中
尚未添加币种|No currencies added|Sin monedas añadidas|Aucune devise ajoutée|通貨が追加されていません
请选择需要的币种，各币种独立统计，不进行汇率换算。已有账户或账单使用的币种不能移除。|Choose your currencies. Each is tracked separately, without conversion. Currencies used by accounts or entries cannot be removed.|Elige tus monedas. Se calculan por separado, sin conversión. No se pueden quitar monedas en uso.|Choisissez vos devises. Calculs séparés sans conversion. Une devise utilisée ne peut pas être retirée.|使用する通貨を選んでください。換算せず個別に集計します。口座や明細で使用中の通貨は削除できません。
`; 
const dictionary=new Map(languageRows.trim().split('\n').map(line=>{const a=line.split('|');return [a[0].replaceAll('\\n','\n'),a.slice(1)]}));
const languages=['en','zh-CN','es','fr','ja'];
function T(value){const s=String(value),lang=PublicPrefs.locale();if(lang==='zh-CN')return s;const row=dictionary.get(s.trim());return row?s.replace(s.trim(),row[{en:0,es:1,fr:2,ja:3}[lang]]):s}
window.T=T;const nativeAlert=window.alert.bind(window),nativeConfirm=window.confirm.bind(window);window.alert=s=>nativeAlert(translatedText(s));window.confirm=s=>nativeConfirm(translatedText(s));
const categoryRows=`餐饮|Dining|Comida|Repas|食事
购物|Shopping|Compras|Achats|買い物
交通|Transport|Transporte|Transport|交通
住房|Housing|Vivienda|Logement|住居
娱乐|Entertainment|Ocio|Loisirs|娯楽
医疗|Healthcare|Salud|Santé|医療
学习|Education|Educación|Formation|学習
早餐|Breakfast|Desayuno|Petit déjeuner|朝食
午餐|Lunch|Almuerzo|Déjeuner|昼食
晚餐|Dinner|Cena|Dîner|夕食
饮品零食|Drinks & snacks|Bebidas y aperitivos|Boissons et collations|飲み物・おやつ
买菜|Groceries|Supermercado|Courses alimentaires|食料品
外卖|Takeaway|Comida a domicilio|Repas à emporter|デリバリー
服饰鞋包|Clothing & bags|Ropa y bolsos|Vêtements et sacs|衣服・靴・バッグ
美妆护肤|Beauty & skincare|Belleza y cuidado|Beauté et soins|美容・スキンケア
数码家电|Electronics|Electrónica|Électronique|家電・デジタル
家居用品|Home goods|Hogar|Équipement de maison|家具・生活用品
日用品|Daily essentials|Productos diarios|Produits du quotidien|日用品
公共交通|Public transit|Transporte público|Transports en commun|公共交通機関
打车|Taxi|Taxi|Taxi|タクシー
燃油|Fuel|Combustible|Carburant|燃料
停车|Parking|Aparcamiento|Stationnement|駐車場
水电燃气|Utilities|Servicios básicos|Eau et énergie|水道・電気・ガス
网络通讯|Internet & phone|Internet y teléfono|Internet et téléphone|通信費
物业|Property fees|Gastos de comunidad|Charges de copropriété|管理費
旅行|Travel|Viajes|Voyages|旅行
运动健身|Fitness|Deporte|Sport|スポーツ
订阅服务|Subscriptions|Suscripciones|Abonnements|定額サービス
社交聚餐|Social dining|Comidas sociales|Repas entre amis|会食
人情礼物|Gifts|Regalos|Cadeaux|贈り物
孝敬家人|Family support|Ayuda familiar|Aide familiale|家族への支援
宠物|Pets|Mascotas|Animaux|ペット
保险|Insurance|Seguros|Assurance|保険
育儿|Childcare|Cuidado infantil|Garde d’enfants|育児
维修|Repairs|Reparaciones|Réparations|修理
手续费|Fees|Comisiones|Frais|手数料
其他支出|Other expenses|Otros gastos|Autres dépenses|その他の支出
工资|Salary|Sueldo|Salaire|給与
奖金|Bonus|Prima|Prime|賞与
理财|Investments|Inversiones|Placements|投資
红包|Cash gifts|Regalos de dinero|Dons en argent|お祝い金
其他收入|Other income|Otros ingresos|Autres revenus|その他の収入
手机安装与离线使用|Install & use offline|Instalación y uso sin conexión|Installation et mode hors ligne|インストールとオフライン利用
重新检查离线资源|Check for updates|Buscar actualizaciones|Vérifier les mises à jour|更新を確認
正在检查离线资源…|Checking offline resources…|Comprobando recursos…|Vérification des ressources…|オフライン用データを確認中…
正在检查…|Checking…|Comprobando…|Vérification…|確認中…
离线资源正在安装，请保持页面打开片刻…|Installing offline resources. Keep this page open…|Instalando recursos. Mantén la página abierta…|Installation en cours. Gardez cette page ouverte…|インストール中です。ページを開いたままお待ちください…
离线使用已就绪 · 电脑关机后也可从主屏幕打开|Offline ready · works from the Home Screen with the computer off|Listo sin conexión · funciona con el ordenador apagado|Prêt hors ligne · fonctionne même si l’ordinateur est éteint|オフラインで利用可能・パソコンの電源が切れていても起動できます
离线资源不完整，请连接电脑后重新检查|Offline resources incomplete. Reconnect and try again.|Recursos incompletos. Conecta y reintenta.|Ressources incomplètes. Reconnectez-vous et réessayez.|オフライン用データが不足しています。接続して再確認してください。
暂时无法确认离线状态，请联网后重新检查。|Unable to check offline status. Reconnect and retry.|No se pudo comprobar. Conecta y reintenta.|État hors ligne inconnu. Reconnectez-vous et réessayez.|状態を確認できません。接続して再確認してください。
离线安装需要 HTTPS 地址，请使用 Tailscale 提供的网址打开。|Offline installation needs HTTPS. Use your Tailscale HTTPS address.|La instalación requiere HTTPS. Usa tu dirección HTTPS de Tailscale.|L’installation exige HTTPS. Utilisez votre adresse HTTPS Tailscale.|オフライン利用にはHTTPSが必要です。TailscaleのHTTPSアドレスを使用してください。
无法连接电脑更新资源；已安装的离线版本仍可使用。|Cannot reach the computer. The installed offline version still works.|Sin conexión al ordenador. La versión instalada sigue disponible.|Ordinateur inaccessible. La version hors ligne reste disponible.|パソコンに接続できません。インストール済みの版は利用できます。
离线安装未完成，请保持电脑在线后重试。|Installation incomplete. Keep the computer online and retry.|Instalación incompleta. Conecta el ordenador y reintenta.|Installation incomplète. Gardez l’ordinateur connecté et réessayez.|インストール未完了です。パソコンを接続して再試行してください。
离线安装失败，请确认电脑和 Tailscale 已连接后重新检查。|Installation failed. Check the computer and Tailscale connection.|Error de instalación. Comprueba el ordenador y Tailscale.|Échec de l’installation. Vérifiez l’ordinateur et Tailscale.|失敗しました。パソコンとTailscaleの接続を確認してください。
设备同步|Device sync|Sincronización|Synchronisation|端末間の同期
准备同步…|Preparing to sync…|Preparando sincronización…|Préparation de la synchronisation…|同期を準備中…
立即同步|Sync now|Sincronizar ahora|Synchroniser maintenant|今すぐ同期
正在同步…|Syncing…|Sincronizando…|Synchronisation…|同期中…
暂时无法连接电脑 · 本地记账可继续使用|Computer unavailable · you can keep recording locally|Ordenador no disponible · puedes registrar sin conexión|Ordinateur inaccessible · continuez la saisie locale|パソコンに接続できません・この端末で記録を続けられます
已同步|Synced|Sincronizado|Synchronisé|同期済み
保存失败，请先导出当前账本备份。|Save failed. Export a backup of the current ledger.|Error al guardar. Exporta una copia.|Échec de l’enregistrement. Exportez une sauvegarde.|保存できませんでした。バックアップを書き出してください。
请填写有效的账户名称和余额。|Enter a valid account name, currency and balance.|Introduce un nombre, moneda y saldo válidos.|Saisissez un nom, une devise et un solde valides.|有効な口座名・通貨・残高を入力してください。
同币种已存在这个账户名称，请换个名称。|That account name already exists for this currency.|Ya existe esa cuenta para esta moneda.|Ce nom de compte existe déjà pour cette devise.|同じ通貨でその口座名は既に使われています。
请选择同币种且可用的账户。|Choose an available account in the same currency.|Elige una cuenta disponible en la misma moneda.|Choisissez un compte disponible dans la même devise.|同じ通貨の利用可能な口座を選んでください。
账户与账单已恢复|Accounts and entries restored|Cuentas y registros restaurados|Comptes et opérations restaurés|口座と明細を復元しました
账户数据无法读取，请先导出备份后恢复。|Account data could not be read. Export a backup before restoring.|No se pudieron leer las cuentas. Exporta una copia.|Lecture des comptes impossible. Exportez une sauvegarde.|口座データを読み取れません。先にバックアップしてください。
已重置，账本恢复初始状态|Ledger reset|Datos restablecidos|Carnet réinitialisé|家計簿をリセットしました
账户、初始余额和账单一起同步。离线更改会排队，重新连接电脑和 Tailscale 后自动同步。两台设备请使用同一个 HTTPS 地址。重置会清空所有设备的账户和账单。|Accounts, opening balances and entries sync together. Offline changes wait until you reconnect. Use the same HTTPS address on your devices. Reset clears all synced accounts and entries.|Las cuentas, saldos y registros se sincronizan al reconectar. Usa la misma dirección HTTPS. Restablecer borra los datos sincronizados.|Comptes, soldes et opérations sont synchronisés à la reconnexion. Utilisez la même adresse HTTPS. La réinitialisation efface les données synchronisées.|口座・開始残高・明細を接続時に同期します。同じHTTPSアドレスを使ってください。リセットは同期中の全端末に反映されます。
iPhone：Safari 分享 → 添加到主屏幕 → 开启“作为网页 App 打开”。添加后，从主屏幕打开一次，确认下方显示“已就绪”，再断开连接测试。|iPhone: Safari → Share → Add to Home Screen → Open as Web App. Open once while connected and wait for Offline ready before testing offline.|iPhone: Safari → Compartir → Añadir a pantalla de inicio. Abre conectado y espera a que esté listo antes de probar sin conexión.|iPhone : Safari → Partager → Sur l’écran d’accueil. Ouvrez en ligne et attendez que le mode hors ligne soit prêt.|iPhone：Safari→共有→ホーム画面に追加。接続した状態で一度開き、オフライン準備完了を確認してください。
账本先保存在当前设备，连接电脑后自动同步。请查看“设备同步”的状态，并定期导出备份。清理网站数据或移除应用可能导致尚未同步的记录丢失。|Data saves on this device first, then syncs when connected. Check sync status and export backups regularly. Clearing site data or removing the app can lose unsynced entries.|Los datos se guardan localmente y se sincronizan al conectar. Exporta copias. Borrar los datos o la aplicación puede perder registros sin sincronizar.|Les données sont d’abord enregistrées ici, puis synchronisées. Exportez des sauvegardes. Effacer les données ou l’application peut perdre les opérations non synchronisées.|まず端末に保存し、接続時に同期します。定期的にバックアップしてください。サイトデータやアプリを削除すると未同期の記録が失われる可能性があります。`;
for(const line of categoryRows.split('\n')){const a=line.split('|');dictionary.set(a[0],a.slice(1))}
const textMemory=new WeakMap(),attributeMemory=new WeakMap();
function translatedText(s){let direct=T(s);if(direct!==s||PublicPrefs.locale()==='zh-CN')return direct;let m=s.match(/^全部 (\d+) 个分类 ↓$/);if(m)return ({en:`All ${m[1]} categories ↓`,es:`${m[1]} categorías ↓`,fr:`${m[1]} catégories ↓`,ja:`全${m[1]}カテゴリ ↓`})[PublicPrefs.locale()];m=s.match(/^· (\d+) 笔$/);if(m)return '· '+m[1];m=s.match(/^(\d+) 笔账单未分配账户，不计入任何账户余额。可在账单中编辑归属。$/);if(m)return ({en:`${m[1]} unassigned entries. Edit entries to assign an account.`,es:`${m[1]} registros sin cuenta. Edita para asignarla.`,fr:`${m[1]} opérations sans compte. Modifiez-les pour en choisir un.`,ja:`口座未指定の記録：${m[1]}件。編集して口座を指定できます。`})[PublicPrefs.locale()];m=s.match(/^(.*) · (\d+) 个账户$/);if(m)return m[1]+' · '+m[2]+' '+({en:'accounts',es:'cuentas',fr:'comptes',ja:'口座'})[PublicPrefs.locale()];
if(s.includes('：'))return s.split('：').map(translatedText).join(': ');return s.split(' · ').map(p=>T(p)).join(' · ').replace('（已归档）',' ('+T('已归档')+')').replace('（归档）',' ('+T('归档')+')')}
function translateDOM(root=document.body){if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(const n of nodes){if(n.parentElement?.closest('script,style,input,textarea,[data-user-content],.account-card-head>b,select#record-account option[value]:not([value=""]),select#ledger-account option:not([value=all]):not([value=unassigned])'))continue;const old=textMemory.get(n),source=old&&old.output===n.data?old.source:n.data;const output=translatedText(source);textMemory.set(n,{source,output});if(n.data!==output)n.data=output}for(const el of root.querySelectorAll('[placeholder],[aria-label],option')){for(const attr of ['placeholder','aria-label']){if(!el.hasAttribute(attr))continue;let memory=attributeMemory.get(el)||{};const val=el.getAttribute(attr),old=memory[attr],source=old&&old.output===val?old.source:val,output=translatedText(source);memory[attr]={source,output};attributeMemory.set(el,memory);if(val!==output)el.setAttribute(attr,output)}}document.documentElement.lang=PublicPrefs.locale();document.title=T('小账本')+' · Personal ledger';}
const extraRows=`主导航|Main navigation|Navegación principal|Navigation principale|メインナビゲーション
记账币种|Entry currency|Moneda del registro|Devise de saisie|記録の通貨
统计币种|Reporting currency|Moneda del resumen|Devise des statistiques|集計通貨
查看月份|View month|Ver mes|Mois affiché|表示月
账单币种|Ledger currency|Moneda de movimientos|Devise du carnet|明細の通貨
账单账户|Ledger account|Cuenta del registro|Compte du carnet|明細の口座
收支类型|Transaction type|Tipo de movimiento|Type d’opération|収支の種類
支出或收入分类|Expense or income category|Categoría de gasto o ingreso|Catégorie de dépense ou revenu|収支のカテゴリ
趋势时间范围|Trend range|Intervalo de tendencia|Période de tendance|推移の期間
趋势指标|Trend metric|Indicador|Indicateur|推移の指標
跨月对比支出分类|Expense category for comparison|Categoría para comparar|Catégorie à comparer|比較する支出カテゴリ
删除这笔记录|Delete entry|Eliminar registro|Supprimer l’opération|この記録を削除
数据保存在当前浏览器|Data saved in this browser|Datos guardados en este navegador|Données enregistrées dans ce navigateur|このブラウザにデータを保存
建议定期导出备份|Export backups regularly|Exporta copias con frecuencia|Exportez régulièrement une sauvegarde|定期的にバックアップしてください
小账本 1.0|Pocket Ledger · Public edition|Libro de gastos · Edición pública|Carnet de comptes · Édition publique|家計簿・公開版
YOUR PERSONAL LEDGER|YOUR PERSONAL LEDGER|TU LIBRO PERSONAL|VOTRE CARNET PERSONNEL|あなたの家計簿
RECENT ACTIVITY|RECENT ACTIVITY|ACTIVIDAD RECIENTE|ACTIVITÉ RÉCENTE|最近の記録
YOUR ACCOUNTS|YOUR ACCOUNTS|TUS CUENTAS|VOS COMPTES|あなたの口座
备份版本或格式不正确|Invalid backup format or version|Formato o versión de copia incorrectos|Format ou version de sauvegarde incorrect|バックアップの形式・版が無効です
账户数据格式不正确|Invalid account data|Datos de cuenta incorrectos|Données de compte incorrectes|口座データが無効です
账单或账户关联不正确|Invalid entry or account association|Registro o vínculo de cuenta incorrecto|Opération ou association de compte incorrecte|明細または口座の関連付けが無効です
备份无效，未修改账本：|Invalid backup; ledger unchanged: |Copia no válida; datos sin cambios: |Sauvegarde incorrecte ; données inchangées : |バックアップが無効です。データは変更されません：
请输入正确的金额（最多两位小数）|Enter a valid amount (up to two decimals)|Introduce un importe válido (dos decimales)|Saisissez un montant valide (deux décimales)|有効な金額を入力してください（小数2桁まで）
重置失败，未清除账本。请重试。|Reset failed. Ledger unchanged; try again.|Error al restablecer. Los datos no han cambiado.|Échec de la réinitialisation. Données inchangées.|リセットできませんでした。データは変更されていません。
用备份中的|Replace this ledger with |Reemplazar con |Remplacer avec |バックアップから復元：
笔账单和| entries and | registros y | opérations et |件の明細と
个账户替换当前账本？变更也会同步到其他设备。建议先导出当前备份。| accounts from this backup? Changes sync to your devices. Export a current backup first.| cuentas de esta copia? Los cambios se sincronizarán. Exporta antes una copia actual.| comptes de cette sauvegarde ? Les modifications seront synchronisées. Exportez d’abord une sauvegarde.|個の口座。変更は他の端末にも同期されます。先に現在のデータをバックアップしてください。
同步队列无法保存，请先导出备份；本地账本仍保留。|Cannot save the sync queue. Export a backup; local entries are kept.|No se puede guardar la cola. Exporta una copia; los registros se conservan.|Impossible d’enregistrer la file. Exportez une sauvegarde ; les opérations locales sont conservées.|同期待ちの保存に失敗しました。ローカルデータは保持されています。バックアップしてください。
需要更新离线资源并重新打开应用，更新前本地数据不会丢失。|Update offline resources and reopen the app. Local data is kept.|Actualiza los recursos y vuelve a abrir. Los datos locales se conservan.|Mettez à jour les ressources et rouvrez l’application. Les données locales sont conservées.|オフライン用データを更新してアプリを開き直してください。端末のデータは保持されます。
离线或电脑未连接|Offline or computer disconnected|Sin conexión o PC desconectado|Hors ligne ou ordinateur déconnecté|オフライン・パソコン未接続
项更改待同步| changes waiting to sync| cambios pendientes| modifications en attente|件の変更が同期待ち
已同步，剩余|Synced; remaining: |Sincronizado; restantes: |Synchronisé ; restant : |同期済み・残り：
项等待发送| changes waiting to send| cambios por enviar| modifications à envoyer|件の変更が送信待ち
，上次同步|; last sync: |; última sincronización: | ; dernière synchronisation : |・前回の同期：`;
for(const line of extraRows.split('\n')){const a=line.split('|');dictionary.set(a[0],a.slice(1))}
const plainTranslatedText=translatedText;translatedText=s=>{const output=plainTranslatedText(s);if(output!==s||PublicPrefs.locale()==='zh-CN')return output;if(!/[\u3400-\u9fff]/.test(s))return s;let result=s;for(const [key]of translationFragments){if(key.length>=5&&/[\u3400-\u9fff]/.test(key)&&result.includes(key))result=result.replaceAll(key,T(key))}return result};

const translationFragments=[...dictionary].sort((a,b)=>b[0].length-a[0].length);
